const express =require('express')
const app= express()
const mongoose =require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')
const cors =require('cors')
const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4'])


const secret= process.env.JWT_SECRET;
if (!secret) throw new Error("JWT_SECRET missing")
app.use(cors({origin:"https://movie-database-black-eight.vercel.app/"}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log("DB error", e))


const userSchema= new mongoose.Schema({

User:{type:String, required: true, unique:true},
Password:{type:String, required:true},
List:{type:Array},

},{})
const User =mongoose.model('User',userSchema);
 

app.post('/register', async(req,res)=>{
   try{
    if (/\d/.test(req.body.user)) {
  return res.status(400).json({ error: "Username can't contain numbers" })
}
const newUser = await User.create({
    User: req.body.user,
    Password: await bcrypt.hash(req.body.password,10)
 
})
res.status(201).json({ ok: true })
}
 catch (e){
     if (e.code === 11000) {
      return res.status(409).json({ error: "Username already taken" })
     
    }
 res.status(500).json({ error: "Something went wrong" }) 
}


})
const auth=(req,res,next)=>{


if (!req.headers.authorization) 
{
    return res.status(401).json({error:"No token"})
}
try{
    const token = req.headers.authorization.split(" ")[1];
    const authorize = jwt.verify(token,secret )
 
    req.user = authorize 
  

      next()
}
catch (e){
    console.log(e)
     res.status(401).json({error:`Error:${e} `})
}
}

app.post('/login', async(req,res)=>{
   
  if (!req.body.user || !req.body.password) return res.json({error: "Credentials were not sent"})
const foundUser =await User.findOne({User: req.body.user})
if (!foundUser) return res.status(401).json({error: "Couldn't find an user"})
const comp= await bcrypt.compare(req.body.password,foundUser.Password)
    if ( comp){
        const payload= {

user:foundUser.User,
Id:foundUser._id

}
 const token=jwt.sign(payload,secret,{expiresIn:1800} )
        res.json({token})

    }
    else{
        res.status(401).json({ error: "Invalid request, or invalid credentials" })
        
    }
   
})
app.post('/myList',auth,async(req,res)=>{
   
    const user =await User.findById(req.user.Id)
   
   const isAdded=  user.List.some(i=> req.body.id===i.id )   
   if (isAdded) return res.json(user.List)
user.List.push(req.body)
   await user.save()
 res.json(user.List)

})
app.delete('/myList/:id',auth,async (req,res)=>{
   
    const user =await User.findById(req.user.Id)
  const idMovie=Number(req.params.id);
  user.List= user.List.filter(i=>i.id  !==idMovie)
await user.save()
  res.json(user.List)
})
app.get('/myList',auth, async(req,res)=>{
    const user = await User.findById(req.user.Id)
    res.json(user.List)
})
app.get('/auth/all',auth,(req,res)=>{
   
    res.json("Aqui tienes")
})


app.listen(process.env.PORT || 3000,()=>{
    console.log("Serversup")
})


