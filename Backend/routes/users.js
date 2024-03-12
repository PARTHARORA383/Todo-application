const express = require("express");
const {user} = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

const router = express.Router();

router.use(express.json())

const signupBody = zod.object({
   username : zod.string().email(),
   password : zod.string()
})

router.post("/signup",async (req , res)=>{
  const signup = signupBody.safeParse(req.body);
  

  if(!signup.success){
    return res.status(411).json({
      msg : "Invalid inputs"
    })
  }
  const existingUser = await user.findOne({
    username : req.body.username
  })

  if(existingUser){
    return res.json({
      msg : "User already exists"
    })
  }
    await user.create({
    username : req.body.username,
    password : req.body.password
  })

  const userID = user._id ;
  

  const token = jwt.sign({
   userID
  },JWT_SECRET)

  res.json({
    msg : "User created",
    token : token
  })
})


module.exports  = router;

