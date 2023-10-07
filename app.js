const express = require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB = require('./db/connect')
app.use(express.json()); // Add this line to enable JSON body parsing
require('dotenv').config()
const mongoose=require('mongoose')
const db_url=process.env.MONGO_URI
const port=process.env.PORT


app.use('/api/v1/tasks',tasks)

const start =async()=>{
    try{
        await connectDB(db_url)
        app.listen(port,console.log(`Server is listening on port ${port}`))

    }
    catch(error){
        console.log(error)
    }
}
start()