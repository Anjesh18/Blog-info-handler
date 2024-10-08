const mongoose=require("mongoose");
 
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    }
})

const User=mongoose.model("userModel",userSchema)
module.exports=User