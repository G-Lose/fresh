const express=require('express');
let Router=express.Router();
let check=require('../db/mysql');
let {find,create,remove,update}=require('../db/mongodb');
let format=require('../utls') 
const colName1='minlist'
const colName2='combo'
const colName3='cart'
/* const urlencode = express.urlencoded(); */

//jsonp接口，必须提到查询单个商品前面
Router.get('/jsonp',async(req,res)=>{
    let sql=`select * from lb`
    let {callback}=req.query;
    let result=await check(sql)
    res.send(`${callback}(${JSON.stringify(result)})`)
})

//查询首页列表商品
Router.get('/home1',async(req,res)=>{
    //通过参数将页数，条数传递过来,实现分页的效果
    //page:页数，num:条数
    let {page,num,sort}=req.query;
    console.log(req.query)
    // //跳过的条数
    let index=(page-1)*num
    let result=await find(colName1,{},{skip:index,limit:num,sort})
   /*  console.log(result); */
    
    // let result=await find(colName)
    res.send(format({data:result}))
})
//查询首页列表组合商品
Router.get('/home2',async(req,res)=>{
    //通过参数将页数，条数传递过来,实现分页的效果
    //page:页数，num:条数
    let {page,num,sort}=req.query;
    // //跳过的条数
    let index=(page-1)*num
    let result=await find(colName2,{},{skip:index,limit:num,sort})
   /*  console.log(result); */
    
    // let result=await find(colName)
    res.send(format({data:result}))
})

/************************************购物车*******************************************/  

// 购物车的全部商品
Router.get('/',async(req,res)=>{
    //查询单个商品
    /* let {data_id}=req.params; */
    // 查询语句
    let result=await find(colName3,{},{})
    res.send(result)
    /* console.log(result); */
})


// 购物车增加商品
Router.post('/',async(req,res)=>{
    //数据传输
    let {data_id,src,des_title,des_info,des_now_m,add_cart,number}=req.body;
    /* console.log(data_id,src,des_title,des_info,des_now_m,add_cart,number); */
    

    // 插入数据
    let result =await create(colName3,{data_id,src,des_title,des_info,des_now_m,add_cart,number})
    res.send(result)
    console.log(result);
})

// 删除数据
Router.delete('/',async(req,res)=>{
    //数据传输
    let {data_id}=req.body;
    console.log(req.body)
//     // console.log(data_id,"后台删除")
//       let jp = JSON.stringify(req.body);
//     console.log(jp);
//     console.log(jp.data_id,"后台删除")

    // 删除数据
    let result =await remove(colName3,{data_id})
    res.send(result)
    //console.log(result);
})

// 更新购物车
Router.put('/',async(req,res)=>{
    //查询单个商品
    let { newnum:data_id,event:number }=req.body;
    console.log(data_id,number);
    
    // 查询语句
    let result=await update(colName3,{data_id},{number})
    res.send(result)
    // console.log(result,'1011');
})


// 购物车id查询
Router.get('/home1/:data_id',async(req,res)=>{
    
    //查询单个商品
    let {data_id}=req.params;
    console.log(data_id)
    // 查询语句
    let result=await find(colName1,{data_id},{})
    res.send(result)
    console.log(result);
})

module.exports=Router

