const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    country:String,
    available:String,    
    description:String,
    image:String,
    title:String,
    id:Number
}, { collection : 'product' });
 
const Product= mongoose.model('Product', productSchema);
 
module.exports = Product;