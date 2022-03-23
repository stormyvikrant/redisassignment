const mongoose=require("mongoose")
module.exports=()=>{
    return mongoose.connect(
        "mongodb+srv://vikrantuser:uservikrant@cluster0.brbuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    };
