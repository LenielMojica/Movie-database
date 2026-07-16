const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')
const dns = require('dns')

// Node was picking a dead 127.0.0.1 resolver; force a public DNS.
dns.setServers(['8.8.8.8', '8.8.4.4'])

const secret = process.env.JWT_SECRET
if (!secret) throw new Error("JWT_SECRET missing")

// ---------- App setup ----------
const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://movie-database-black-eight.vercel.app",
]
app.use(cors({ origin: allowedOrigins }))
app.use(express.json())

// ---------- Database ----------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log("DB error", e))

const userSchema = new mongoose.Schema({
  User: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  List: { type: Array, default: [] },
})
const User = mongoose.model('User', userSchema)

// ---------- Auth middleware ----------
const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "No token" })
  }
  try {
    const token = req.headers.authorization.split(" ")[1]
    req.user = jwt.verify(token, secret)
    next()
  } catch (e) {
    res.status(401).json({ error: "Invalid token" })   // don't leak internals
  }
}

// ---------- Auth routes ----------
app.post('/register', async (req, res) => {
  try {
    if (/\d/.test(req.body.user)) {
      return res.status(400).json({ error: "Username can't contain numbers" })
    }
    await User.create({
      User: req.body.user,
      Password: await bcrypt.hash(req.body.password, 10),
    })
    res.status(201).json({ ok: true })
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ error: "Username already taken" })
    res.status(500).json({ error: "Something went wrong" })
  }
})

app.post('/login', async (req, res) => {
  if (!req.body.user || !req.body.password) {
    return res.status(400).json({ error: "Credentials were not sent" })
  }
  const foundUser = await User.findOne({ User: req.body.user })
  if (!foundUser) return res.status(401).json({ error: "Couldn't find an user" })

  const match = await bcrypt.compare(req.body.password, foundUser.Password)
  if (!match) return res.status(401).json({ error: "Invalid credentials" })

  const payload = { user: foundUser.User, Id: foundUser._id }
  const token = jwt.sign(payload, secret, { expiresIn: 1800 })
  res.json({ token })
})

// Pages ping this to validate the token; the auth middleware does the actual check.
app.get('/auth/all', auth, (req, res) => {
  res.json({ ok: true })
})

// ---------- MyList routes ----------
app.get('/myList', auth, async (req, res) => {
  const user = await User.findById(req.user.Id)
  res.json(user.List)
})

app.post('/myList', auth, async (req, res) => {
  const user = await User.findById(req.user.Id)
  const alreadyAdded = user.List.some(i => i.id === req.body.id)
  if (alreadyAdded) return res.json(user.List)
  user.List.push(req.body)
  await user.save()
  res.json(user.List)
})

app.delete('/myList/:id', auth, async (req, res) => {
  const user = await User.findById(req.user.Id)
  const movieId = Number(req.params.id)
  user.List = user.List.filter(i => i.id !== movieId)
  await user.save()
  res.json(user.List)
})

// ---------- Start ----------
app.listen(process.env.PORT || 3000, () => {
  console.log("Server up")
})
