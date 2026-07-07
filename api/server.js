const express =require('express')
const app= express()
const jwt = require('jsonwebtoken')
const bcrypt =require('bcrypt')
const cors =require('cors')
const credentials = [
 {   Id:1,
    User: "Admin",
    Password: "$2b$10$Ny6/JVFOqOYrCJOmh7plIue0kb/CaUEA4HU4gGisrTrfoDXtK.H1y",
 },
   {   Id:2,
    User: "Leniel",
    Password: "$2b$10$TzjP7oWgbr3KkQFuwdbdouCeEP/a1Y8Pq5PPv.6Ngs23WuIbUGvNa",
 },  
]

const secret= process.env.JWT_SECRET;

app.use(cors())
app.use(express.json())
const auth=(req,res,next)=>{


if (!req.headers.authorization) 
{
    return res.status(401).json({Result:"Se te olvido mandar el token"})
}
try{
    const token = req.headers.authorization.split(" ")[1];
    const authorize = jwt.verify(token,secret )
    req.user = authorize 
  

      next()
}
catch (e){
    console.log(e)
     res.status(401).json({Result:`Error:${e} `})
}
}

app.post('/login', async(req,res)=>{
    console.log("mira quien quiere entrar:",req.body)
  
const foundUser = credentials.find(u => u.User === req.body.user)
if (!foundUser) return res.status(401).json({Results: "No se encontro nada"})
const comp= await bcrypt.compare(req.body.password,foundUser.Password)
    if ( comp){
        const payload= {

user:foundUser.User,
Id:foundUser.Id

}
 const token=jwt.sign(payload,secret,{expiresIn:120} )
        res.json({token})

    }
    else{
        res.status(401).json({ error: "Petición inválida, usuario o contrasena invalidos." })
        
    }
   
})

app.get('/myList',auth,(req,res)=>{
   
    res.send(`Hello ${req.user.user}`)
})
app.listen(3000,()=>{
    console.log("Serversup")
})


