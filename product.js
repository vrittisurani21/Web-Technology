const mongoose = require('mongoose');
const schema = mongoose.Schema({
    id:Number,
    name:String,
    type:String,
    price:Number,
    expiry_date:Number
});
module.exports = mongoose.model("product",schema);