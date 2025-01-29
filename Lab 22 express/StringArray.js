const express =require('express');
const bodyParser = require ('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const students=['vritti','rajvi','drashti','disha','dharashvi'];

app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:index',(req,res)=>{
    const ans = students.find((stu)=>{
        if(stu.name==req.params.name){
            return true;
        }
    });
    res.send(ans);
});

app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send('student added');
});

app.patch('/students/:index/:name',(req,res)=>{
    const indexToEdit=students.findIndex((stu)=>{
        if(stu.name==req.params.name){
            return true;
        }
    });
    students [indexToEdit]=req.body;
    res.send('student edited');
});

app.delete('/students/:index/:name',(req,res) =>{
    const indexToDelete=students.findIndex((stu)=>{
        if(stu.name==req.params.name){
            return true;
        }
    });
    students.splice(indexToDelete,1);
    res.send('student deleted');
});

app.listen(3040,()=>{
    console.log('serever started at 3040');
})