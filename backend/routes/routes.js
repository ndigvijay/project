const express=require('express')
const router =express.Router()
const signup=require("../models/users")

router.post("/signup",(req,res)=>{
    const signedUpUser=new signup({
        username:req.body.username,
        password:req.body.password,
    })
    signedUpUser.save()
    .then(data=>res.json(data))
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
})

module.exports=router