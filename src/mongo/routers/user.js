const express=require('express');
const {find,remove,update}=require('../db/mongodb');
const format=require('../utls');
const colName='reg';

let Router=express.Router();


//查询所有的用户信息
Router.get('/',async(req,res)=>{
    let result=await find(colName);
    res.send(format({data:result}))
})

//查询单个用户信息
Router.get('/:id',async(req,res)=>{
    let {id}=req.params
    //fields:用于过滤某些字段
    //过滤password字段
    let result=await find(colName,{_id:id},{fields:{password:false}});
    res.send(format({data:result}))
})

//删除用户信息
Router.delete('/:id',async(req,res)=>{
    let {id}=req.params;
    //通过mongodb模块中的mongodb.ObjectId()格式化id
    // let result=await remove(colName,{_id:ObjectId(id)})
    let result=await remove(colName,{_id:id})

    //删除判断
    if(result.deletedCount){
        res.send(format())
    }else{
        res.send(format({status:0}))
    }
    
})

//修改用户信息
Router.patch('/:id',async(req,res)=>{
    let {id}=req.params;
    //只修改传递过来的参数
    let o={};
    for(key in req.body){
        o[key]=req.body[key]
    }
    let result=await update(colName,{_id:id},o);
    if(result.modifiedCount===1){
        res.send(format())
    }else{
        res.send(format({status:0}))
    }
})

//注册时查询用户名是否存在
Router.post('/',async(req,res)=>{
    let result=await find(colName,req.body); 
    res.send(format({data:result}))
})

module.exports=Router