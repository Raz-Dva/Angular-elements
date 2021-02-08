const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const colorSchema = new Schema({
  
  code:{
    red: Number,
    green: Number,
    blue: Number,
    alpha: Number     
  },
  color:String,
  hex:String
}, { collection : 'color' });
 
const Color = mongoose.model('Color', colorSchema);
 
module.exports = Color;