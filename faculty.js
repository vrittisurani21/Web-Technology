const mongoose = require('mongoose');
const schema = mongoose.Schema({
    id:Number,
    name:String,
    branch:String,
    phone:Number,
    age:Number
});
module.exports = mongoose.model("faculty",schema);