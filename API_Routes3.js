const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const product = require('./product.js');

const connectionString = "mongodb+srv://VrittiSurani:Vrts%4021@cluster0.xgxey.mongodb.net/product";
mongoose.connect(connectionString).then(()=>{
    console.log('connected with cloud database');

    const app=express();
    app.use(bodyParser.urlencoded());

    //get all
    app.get('/products',async(req,res)=>{
        const ans = await product.find();
        res.send(ans);
    });
    
    //getByid
    app.get('/products/:id',async(req,res)=>{
        const ans =await product.findOne({
            rno:req.params.id
        });
        res.send(ans);
    });
    
    //create
    app.post('/products',async(req,res)=>{
       bk = new product({... req.body });
       const ans = await bk.save();
       res.send(ans);
    });
    

    //update
    app.patch('/products/:id',async(req,res)=>{
        const bk=await product.findOne({id:req.params.id});
        bk.name=req.body.name;
        const ans = await bk.save();
        res.send(ans);
    });
    
    //delete
    app.delete('/products/:id',async(req,res) =>{
       const ans=await product.deleteOne({id:req.params.id});
       res.send();
    });
    
    app.listen(3010,()=>{
        console.log('serever started at 3010');
    })
})


