
const { error } = require('console')
const Task =require('../models/Task')
const express = require('express');
const app = express();

const getAllTasks = async (req,res)=>{
 
    try{
        const task= await Task.find({})
        res.status(200).json([{task}])
    }
catch(error){
res.status(500).json({msg:error})
}}



//model > Task.js deki şemaya uygun veri girme
const createTask = async (req,res) => {
try {
console.log(req.body)
    const task = await Task.create(req.body)
    
    res.status(201).json({task : task.toObject()})
    console.log(req.body)
}
catch(error){
res.status(500).json({msg:error})
}}




const getTask = async (req,res)=>{

    try{
        //const taskID = req.params.id;
        const {id:taskID} = req.params 
        const task = await Task.findOne({_id:taskID})
     
     if(!task){
         return res.status(404).json({msg: `no task with id:${taskID}`})
     }
     res.status(200).json({task})
    }
catch(error){
res.status(500).json({msg:error})
}
}

const updateTask = async (req,res)=>{

    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new : true, //this options tells mongoose to return the updated document after the update is applied.
            runValidators: true, //this options tells mongooge to return any  defined validators when performing the update.it ensure that the updated document adheres to the schema rules.
        })
        
        if(!task){
            return res.status(404).json({msg: `no task with id:${taskID}`})
        }
        res.status(200).json({task})

    }
    catch(error){
res.status(500).json({msg : error})
    }

}







const deleteTask = async (req,res)=>{
try{
    const {id:taskID}=req.params
    const task = await Task.findByIdAndDelete({_id : taskID})
if(!task){
   return res.status(404).json({msg:`no task with id : ${taskID}`})
}
res.status(200).json({task})
}
catch(error){
    res.status(500).json({msg : error})
}}


module.exports={
    getAllTasks,getTask,createTask,deleteTask,updateTask
}
