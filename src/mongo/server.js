const express=require('express');
const AllRouter=require('./routers')
const {PORT}=require('./config.json')

let app=express();
app.use(AllRouter);
app.use(express.static('./'),(req,res)=>{
    res.send('create')
    
    
});
app.listen(1910,()=>{
    console.log(`server is running on ${PORT}`);
})
