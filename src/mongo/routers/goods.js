const express=require('express');
let Router=express.Router();
let check=require('../db/mysql');
let {find}=require('../db/mongodb');
let format=require('../utls')
const colName='user1'


//jsonp接口，必须提到查询单个商品前面
Router.get('/jsonp',async(req,res)=>{
    let sql=`select * from lb`
    let {callback}=req.query;
    let result=await check(sql)
    res.send(`${callback}(${JSON.stringify(result)})`)
})
//查询所有商品
Router.get('/',async(req,res)=>{
    //设置响应头实现跨域
    // res.header('Access-Control-Allow-Origin','*')
    // let AllowOrigin=['http://localhost:8080','http://localhost:8081']
    // let Origin=req.get('Origin')
    // if(AllowOrigin.includes(Origin)){
    //     res.set({
    //         'Access-Control-Allow-Origin':Origin,
    //         'Access-Control-Allow-Methods':'GET,POST,PATCH,PUT,DELETE,OPTION',
    //         'Access-Control-Allow-HEADERS':'Content-Type,Content-Length,Authorization,Accept,X-Requested-With'
    //     })
    // }
    // let sql=`select * from lb`
    // let result=await check(sql)
    // res.send(result)
    //通过参数将页数，条数传递过来,实现分页的效果
    //page:页数，num:条数
    let {page,num,sort}=req.query;
    //跳过的条数
    let index=(page-1)*num
    let result=await find(colName,{},{skip:index,limit:num,sort})
    res.send(format({data:result}))
})
//查询单个商品
Router.get('/:id',async(req,res)=>{
    let {id}=req.params;
    let sql=`select * from lb where id=${id}`
    let result=await check(sql)
    res.send(result)
})
//添加商品
Router.post('/',async(req,res)=>{
    // let {brand,dis}=req.body
    // let sql=`insert into lb (brand,dis) values ("${brand}","${dis}")`
    let sql=`insert into lb (`;
    for(let key in req.body){
        sql+=`${key},`
    }
    sql=sql.replace(/,$/,') values (')
    for(let key in req.body){
        sql+=`"${req.body[key]}",`
    }
    sql=sql.replace(/,$/,')')
    // console.log(sql);
    let result=await check(sql)
    res.send('商品添加成功')
})

//删除商品
Router.delete('/:id',async(req,res)=>{
    let {id}=req.params;
    let sql=`delete from lb where id=${id}`
    let result=await check(sql)
    res.send(`商品${id}删除成功`)
})

//修改商品
Router.patch('/:id',async(req,res)=>{
    let {id}=req.params;
    // let {brand}=req.body
    // let sql=`update lb set brand="${brand}" where id=${id}`
    let sql=`update lb set `
    for(let key in req.body){
        sql+=`${key}="${req.body[key]}",`
    } 
    sql=sql.replace(/,$/,' where ')
    sql+=`id=${id}`
    console.log(sql);
    let result=await check(sql)
    res.send(`商品${id}修改成功`)    
})
//点赞功能
Router.patch('/:id/like',(req,res)=>{
    let {id}=req.params;
    res.send(`商品${id}点赞成功`)
})

module.exports=Router