// const express=require('express'); or we can import it
import express from 'express';


const app=express();
app.all('/',(req,res)=>{
//    console.log('Request received >',req);
//    console.log('Response received >',res);
   res.send(`I'm up!`);
});
const todos=[
    {
        id:'1',
        title:'Task 1',
        complted:false
    },
    {
        id:'2',
        title:'Task 2',
        complted:true
    }
];
//READ
app.get('/todos',(req,res)=>{
    res.json(todos);
})
//CREATE
app.post('/todos',(req,res)=>{
    // const todo=req.body;
    // todos.push(todo);
    // res.send('Todo has been added');
    const newTodo=req.body;
    todos.push(newTodo);
    res.json({
        message:'New todo created. '
    });
})

//UPDATE

//DELETE
const PORT=5111;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});