const express =require('express');
const bodyParser = require ('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const laptops=[
    {
        id: 1,
        Name:'HP',
        price:100000,
    },
    {
        id: 2,
        Name:'Lenovo',
        price:200000,
    }
]

app.get('/laptops',(req,res)=>{
    res.send(laptops);
});

app.get('/laptops/:id',(req,res)=>{
    const ans = laptops.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

app.post('/laptops',(req,res)=>{
    laptops.push(req.body);
    res.send('laptop added');
});

app.patch('/laptops/:id',(req,res)=>{
    const indexToEdit=laptops.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    laptops [indexToEdit]=req.body;
    res.send('laptop edited');
});

app.delete('/laptops/:id',(req,res) =>{
    const indexToDelete=laptops.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    laptops.splice(indexToDelete,1);
    res.send('laptop deleted');
});

app.listen(3030,()=>{
    console.log('serever started at 3030');
})