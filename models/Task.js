const mongoose=require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:String,
    completed: Boolean,
});


// Task olarak dışa aktarır TaskSchema fonksiyonu çalışır
module.exports=mongoose.model('Task',TaskSchema)
