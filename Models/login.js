//Login Schema

const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const LoginSchema=new Schema({
    email:{
        type:String
        },
    password:{
        type:String
        }
})
module.exports=mongoose.model('LoginDetail',LoginSchema);