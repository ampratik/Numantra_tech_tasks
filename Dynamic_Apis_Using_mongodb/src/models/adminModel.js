const mongoose=require('mongoose');
const conn=require('../config/database')


const adminSchema=new mongoose.Schema({

    Name:{type:String , require:true , trim:true },

    address:{type:String ,require:true},

    Mobile:{type:Number, require:true , unique:true},

    Email:{type:String , require:true ,unique:true ,trim:true},
 
    deletedAt: {type:Date , default:null}, 

    isDeleted: {type:Boolean , default: false}

}
, {timestamp:true})

 module.exports=adminSchema
// module.exports=mongoose.model('adamin',adminSchema)
