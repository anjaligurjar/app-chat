
const { application, Router } = require('express');
const express =require('express')
const UserModel= require('./user.db.js')
const mongoose= require('./user.connection.js')
const router=express.Router()
express();

router.post('/register',(req,res)=>{
    const user= new UserModel({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name


    })
    user.save().then(()=>{
        res.send('registersuccessfully')
    })


})

router.get('/loging',(req,res)=>{
    UserModel.find({email:req.body.email,password:req.body.password})

})

module.exports =router