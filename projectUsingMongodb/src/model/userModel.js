const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    Name:{type:String , require:true , trim:true },

    Age:{type:Number , require:true},

    Gender:{type:String , require:true , enum:["Male","Female","Other"]},

    Address:{
        street:{type:String, require:true , trim:true},
        city:{type:String , require:true , trim:true},
        PinCode:{type:Number,require:true}
    },

    Married:{type:Boolean , require:true},

    Mobile:{type:Number, require:true , unique:true},

    Email:{type:String , require:true ,unique:true ,trim:true}

}
, {timestamp:true})



module.exports=mongoose.model("user",userSchema)