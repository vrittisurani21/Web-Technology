const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const CoffeeShop = require('./CoffeeShop.js');
const cors = require('cors');

const connectionString = "mongodb+srv://VrittiSurani:VrittiSurani@cluster0.xgxey.mongodb.net/CoffeeShop";
mongoose.connect(connectionString).then(()=>{
    console.log('connected with cloud database');

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cors());

    //get all
    app.get('/Customers',async(req,res)=>{
        const ans = await CoffeeShop.find();
        res.send(ans);
    });
    
    //getByCustomerId
    app.get('/Customers/:CustomerId',async(req,res)=>{
        const ans = await CoffeeShop.findOne({
            CustomerId:req.params.CustomerId
        });
        res.send(ans);
    });
    
    //create
    app.post('/Customers',async(req,res)=>{
       cfs = new CoffeeShop({ 
        CustomerId: req.body.CustomerId,
        CustomerName : req.body.CustomerName,
        OrderName : req.body.OrderName,
        OrderType : req.body.OrderType,
        Price : req.body.Price,
    });
       const ans = await cfs.save();
       res.send(ans);
    });
    

    //update
    app.patch('/Customers/:CustomerId',async(req,res)=>{
        const cfs = await CoffeeShop.findOne({CustomerId:req.params.CustomerId});
        cfs.CustomerName=req.body.CustomerName;
        cfs.OrderName=req.body.OrderName;
        cfs.OrderType=req.body.OrderType;
        cfs.Price=req.body.Price;
        await cfs.save()
        res.send(cfs);
    });
    
    //delete
    app.delete('/Customers/:CustomerId',async(req,res) =>{
       const ans=await CoffeeShop.deleteOne({CustomerId:req.params.CustomerId});
       res.send('Deleted');
    });
    
    app.listen(3010,()=>{
        console.log('serever started at 3010');
    })
})