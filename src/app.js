import express from 'express';
const app=express();
app.get("/",async(req,res)=>{
    res.status(200).send({
        status:"success",
        message:"I am made autoscaliing devops"
    })
})

app.listen(3000,()=>{
    console.log("server connected")
})