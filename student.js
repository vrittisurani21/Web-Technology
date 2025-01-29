const mongoose = require('mongoose');
const schema = mongoose.Schema({
    id:Number,
    name:String,
    rno:Number,
    sem:Number,
    phone:Number,
    age:Number
});
module.exports = mongoose.model("student",schema);