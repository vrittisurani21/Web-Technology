const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const faculty = require('./faculty.js');

const connectionString = "mongodb+srv://VrittiSurani:Vrts%4021@cluster0.xgxey.mongodb.net/faculty";
mongoose.connect(connectionString).then(()=>{
    console.log('connected with cloud database');

    const app=express();
    app.use(bodyParser.urlencoded());

    //get all
    app.get('/faculties',async(req,res)=>{
        const ans = await faculty.find();
        res.send(ans);
    });
    
    //getByid
    app.get('/faculties/:id',async(req,res)=>{
        const ans =await faculty.findOne({
            id:req.params.id
        });
        res.send(ans);
    });
    
    //create
    app.post('/faculties',async(req,res)=>{
       fac = new faculty({... req.body });
       const ans = await fac.save();
       res.send(ans);
    });
    

    //update
    app.patch('/faculties/:id',async(req,res)=>{
        const fac=await faculty.findOne({id:req.params.id});
        fac.name=req.body.name;
        const ans = await fac.save();
        res.send(ans);
    });
    
    //delete
    app.delete('/faculties/:id',async(req,res) =>{
       const ans=await faculty.deleteOne({id:req.params.id});
       res.send();
    });
    
    app.listen(3010,()=>{
        console.log('serever started at 3010');
    })
})


