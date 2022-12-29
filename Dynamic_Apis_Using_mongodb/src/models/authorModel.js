const mongoose=require('mongoose');
const conn=require('../config/database')


const authorSchema=new mongoose.Schema({

  Name:{ type:String, require:true, trim:true },

  age:{type:Number, require:true, trim:true },

  noOfBooks:{ type:Number,require:true, trim:true },

  deletedAt: {type:Date , default:null}, 

  isDeleted: {type:Boolean , default: false},

});

module.exports=authorSchema

// module.exports=mongoose.model('author',authorSchema)

//  t3=conn.db2.model('author',authorSchema)
//  module.exports=t3
