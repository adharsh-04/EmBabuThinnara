const exp=require('express');
const app=exp();
require('dotenv').config();
const port=process.env.PORT;
//import userApp and restaurantApp
const userApp=require('../backend/APIs/userApi');
const restaurantApp=require('../backend/APIs/restaurantApi');

//to parse the body of json
app.use(exp.json());
//if path starts with userApi
app.use('/userapi',userApp);
//if path starts with restaurantApi
app.use('/restaurantapi',restaurantApp);

//connecting to database
//importing mongoclient
const mongoclient=require('mongodb').MongoClient;
//Making connection to the database
mongoclient.connect(process.env.MONGO_URL)
.then(client=>{
    //get database obj
    const EmBabuThinnara=client.db('EmBabuThinnara');
    //get collection from database
    const usersCollection=EmBabuThinnara.collection("usersCollection");
    const restaurantsCollection=EmBabuThinnara.collection("restaurantsCollection");
    const menuCollection=EmBabuThinnara.collection("menuCollection");
    //share collection object with express application
    app.set('usersCollection',usersCollection);
    app.set('restaurantsCollection',restaurantsCollection);
    app.set('menuCollection',menuCollection);
    //confirm db connection status
    console.log("DB connection successful")
})
.catch(err=>console.log("err in db connection",err));
//to handle errors
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})

app.listen(port,console.log(`server is running on port ${port}...`))