const express=require('express');
const {createtoken,verify}=require('../utls/token');
const format=require('../utls/index')
const {find}=require('../db/mongodb');
let Router=express.Router();
const colName='reg';

//登陆
Router.get('/',async(req,res)=>{
    let {username,password,keeplogin}=req.query;
    let result=await find(colName,{username,password}); 
    let token='';
    // console.log(result)
    if(result.length){
        //用户登陆成功，判断是否免登录
        if(keeplogin=='true'){
        token=createtoken({username})
        res.send(format({data:result,authrization:token}))
        }
        else{
            res.send(format({data:result}))
        }
    }else{
        res.send(format({status:0}))
    }
})

//7天免登录
Router.get('/free',(req,res)=>{
    let token=req.get("Authorization");
    let result=verify(token)
    if(result){
        res.send(format({data:result}))
    }else{
        res.send(format({status:0}))
    }
})

module.exports=Router