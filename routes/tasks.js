const express =require('express')
const router = express.Router()
const {getAllTasks,createTask,deleteTask,getTask,updateTask} = require('../controllers/tasks')

// It's equivalent to doing something like this:
// const tasksModule = require('../controllers/tasks');
// const getAllTasks = tasksModule.getAllTasks;


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)

module.exports=router
