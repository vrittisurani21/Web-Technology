const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const student = require('./student.js');

const connectionString = "mongodb+srv://VrittiSurani:Vrts%4021@cluster0.xgxey.mongodb.net/student";
mongoose.connect(connectionString).then(()=>{
    console.log('connected with cloud database');

    const app=express();
    app.use(bodyParser.urlencoded());

    //get all
    app.get('/students',async(req,res)=>{
        const ans = await student.find();
        res.send(ans);
    });
    
    //getByid
    app.get('/students/:id',async(req,res)=>{
        const ans =await student.findOne({
            id:req.params.id
        });
        res.send(ans);
    });
    
    //create
    app.post('/students',async(req,res)=>{
       stu = new student({... req.body });
       const ans = await stu.save();
       res.send(ans);
    });
    

    //update
    app.patch('/students/:id',async(req,res)=>{
        const stu=await student.findOne({id:req.params.id});
        stu.name=req.body.name;
        const ans = await stu.save();
        res.send(ans);
    });
    
    //delete
    app.delete('/students/:id',async(req,res) =>{
       const ans=await student.deleteOne({id:req.params.id});
       res.send();
    });
    
    app.listen(3010,()=>{
        console.log('serever started at 3010');
    })
})


