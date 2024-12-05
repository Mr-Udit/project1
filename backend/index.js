import { blogs } from './assects/blogs.js';
import express from 'express';


const app = express();



app.listen(3000,()=>{
    console.log("server is started");
    
})

app.get('/',(_request,response)=>{
    response.send("this is / route")
    
})
app.get('/api/home',(_request,response)=>{
    response.send("<h1>this is home route</h1>")
})
app.get('/api/blogs',(_req,resp)=>{
    resp.send(blogs);
    console.log("bolgs send");    
})