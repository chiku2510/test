import express from "express"
const app=express()


app.get('/',(req,res)=>{
    res.status(200).json({status:200,msg:"Hello from server"})
})


app.listen(5000,()=>{
    console.log('App is listening on port 5000')
})