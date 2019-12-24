const express=require('express');
const {create,find}=require('../db/mongodb')
const format=require('../utls')
const colName='reg';

let Router=express.Router();

Router.post('/',async(req,res)=>{
    let {username,password}=req.body;
    // let result=await create(colName,{username,password});
    //统一返回前端格式
    //先进行判断
    let result1=await find(colName,{username});
    console.log(result1.length);
    if(result1.length){
        res.send(format({status:0}))
    }else{
            let result=await create(colName,{username,password});
            if(result.insertedCount===1){
            res.send(format())
        }
        else{
            res.send(format({status:0}))
        }
    }
    // if(result.insertedCount===1){
    //     res.send(format())
    // }
    // else{
    //     res.send(format({status:0}))
    // }
})

module.exports=Router