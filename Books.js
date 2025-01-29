const express =require('express');
const bodyParser = require ('body-parser');

const app=express();
app.use(bodyParser.urlencoded());

const books=[
    {
        id: 1,
        Name:'Harry Potter',
        Edition:5,
    },
    {
        id: 2,
        Name:'Rajvi',
        Edition:10,
    }
]

app.get('/books',(req,res)=>{
    res.send(books);
});

app.get('/books/:id',(req,res)=>{
    const ans = books.find((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(ans);
});

app.post('/books',(req,res)=>{
    books.push(req.body);
    res.send('book added');
});

app.patch('/books/:id',(req,res)=>{
    const indexToEdit=books.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    books [indexToEdit]=req.body;
    res.send('book edited');
});

app.delete('/books/:id',(req,res) =>{
    const indexToDelete=books.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    books.splice(indexToDelete,1);
    res.send('book deleted');
});

app.listen(3020,()=>{
    console.log('serever started at 3020');
})