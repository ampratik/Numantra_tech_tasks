const mongoose = require("mongoose");
const conn = require("../config/database");

const bookSchema = new mongoose.Schema({

  title: { type: String, require: true, unique: true, trim: true},

  author: { type: String, require: true, trim: true},

  price: { type: Number, require: true, trim: true },

  deletedAt: { type: Date, default: null },

  isDeleted: { type: Boolean, default: false }
  
});

module.export=bookSchema

// module.exports=mongoose.model('book',bookSchema)
// t2=conn.db2.model('book',bookSchema)
// module.exports=t2
