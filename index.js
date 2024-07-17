// const express=require('express'); or we can import it
import express from 'express';

import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
app.all('/',(req,res)=>{
//    console.log('Request received >',req);
//    console.log('Response received >',res);
   res.send(`I'm up!`);
});
const todos=[
    {
        id:'1',
        title:'Task 1',
        completed:false
    },
    {
        id:'2',
        title:'Task 2',
        completed:true
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
app.put('/todos/:id',(req,res)=>{
   
    const newTodoData=req.body;
    const todoParamId=req.params.id;
    const index=todos.findIndex(td=>td.id===todoParamId);
   if(index!==-1){
         todos[index]={
            id:todoParamId,
            ...newTodoData,
         }
        }
    res.json({
        message:'Todo has been updated'
    });
})
//DELETE
app.delete('/todos/:id',(req,res)=>{
    const todoParamId=req.params.id;
    const index=todos.findIndex(td=>td.id===todoParamId);
    if(index!==-1){
        todos.splice(index,1);
    }
    res.json({
        message:'Todo has been deleted'
    });
}) 
const PORT=5111;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});