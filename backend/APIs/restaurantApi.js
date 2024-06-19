const exp=require('express');
const restaurantApp=exp.Router();

const expressAsyncHandler=require('express-async-handler')
const verifyToken=require('../Middlewares/verifyToken');
//get authorsCollection from server.js
restaurantApp.use((req,res,next)=>{
    restaurantsCollection=req.app.get('restaurantsCollection');
    menuCollection=req.app.get('menuCollection');
    next();
})
//import bcrypts
const bcryptjs=require('bcryptjs');
//import jsonwebtoken
const jwt=require('jsonwebtoken');

//request handler for author Registration
restaurantApp.post('/owner',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body;
    //comparing it with username
    const dbUser=await restaurantsCollection.findOne({username:newUser.username});
    if(dbUser!=null){
     res.send({message:"Restaurant already registered"});
    }
    else{
     //hash the password
     const hashedPassword=await bcryptjs.hash(newUser.password,6);
     newUser.password=hashedPassword;
     //add it to the collection
     await restaurantsCollection.insertOne(newUser);
     res.send({message:"Restaurant registered"});
 
    }
 }))
require('dotenv').config();
//request handler for author Login
restaurantApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //Get the user credentials
    const userCred=req.body;
    //compare or find user with the username
    const dbUser=await restaurantsCollection.findOne({username:userCred.username});
   
    //if dbuser is null
    if(dbUser===null){
        res.send({message:"user does not exist"})
    }
    else{
        //compare the hashed password
        const status=await bcryptjs.compare(userCred.password,dbUser.password);
        if(status===false){
            res.send({message:"Incorrect password"});
        }
        else{
            //create json web token
            const signedToken=jwt.sign({username:dbUser.username},process.env.SECRET_KEY,{expiresIn:'1d'});
            //send the response
            res.send({message:"login success",token:signedToken,user:dbUser});

        }
    }
}))


module.exports=restaurantApp;