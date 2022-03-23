const mongoose=require("mongoose");


const todoSchema=new mongoose.Schema(
    {
    task_name:{type:String,required:true},
    whentocomplete:{type:Date,required:true},
    isCompleted:{type:Boolean,required:false,default:false}
},
{
    versionKey:false,
    timestamps:true,

}

);


module.exports=mongoose.model("todo",todoSchema)