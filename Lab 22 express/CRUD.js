const express =require('express');
const bodyParser = require ('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const students=[
    {
        id: 1,
        Name:'Vritti',
        age:19,
        Email:'vritti@gmail.com',
    },
    {
        id: 2,
        Name:'Rajvi',
        age:20,
        Email:'rajvi@gmail.com',
    }
]

app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:id',(req,res)=>{
    const ans = students.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send('student added');
});

app.patch('/students/:id',(req,res)=>{
    const indexToEdit=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students [indexToEdit]=req.body;
    res.send('student edited');
});

app.delete('/students/:id',(req,res) =>{
    const IndextoDelete=students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students.splice(IndextoDelete,1);
    res.send('student deleted');
});

app.listen(3000,()=>{
    console.log('serever started at 3000');
})