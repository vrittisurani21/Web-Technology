const express =require('express');
const bodyParser = require ('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const faculty=[
    {
        id: 1,
        Name:'Arjun',
        age:19,
        Email:'arjun@gmail.com',
    },
    {
        id: 2,
        Name:'Dixita',
        age:20,
        Email:'dixita@gmail.com',
    }
]

app.get('/faculty',(req,res)=>{
    res.send(faculty);
});

app.get('/faculty/:id',(req,res)=>{
    const ans = faculty.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

app.post('/faculty',(req,res)=>{
    faculty.push(req.body);
    res.send('faculty added');
});

app.patch('/faculty/:id',(req,res)=>{
    const indexToEdit=faculty.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    faculty [indexToEdit]=req.body;
    res.send('faculty edited');
});

app.delete('/faculty/:id',(req,res) =>{
    const indexToDelete=faculty.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    faculty.splice(indexToDelete,1);
    res.send('faculty deleted');
});

app.listen(3010,()=>{
    console.log('serever started at 3010');
})