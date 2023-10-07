
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




const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.json({idm:req.params.id})
}


const deleteTask = (req,res)=>{
    res.send('all items from file')
}



module.exports={
    getAllTasks,getTask,createTask,deleteTask,updateTask
}
