//连接mongodb数据库
const {MongoClient,ObjectId}=require('mongodb');
const {url,dbname}=require('../config.json')

// MongoClient.connect(url, function(err, client) {
//         //client:连接成功后的mongodb客户端
//         if(err) throw err;
//         // 连接数据库，无则自动创建
//         let db = client.db('config');
//         let collection=db.collection('user'); 
//         //查询数据库
//         collection.find().toArray((err,result)=>{
//             console.log(result);
//         })
// });

//格式化id
function formatid(query){
    if(query._id&&typeof query._id==="string"){
        query._id=ObjectId(query._id)
    }
}

// 连接数据库
async function connect(){
    // 不传回调函数就会得到一个promise对象
    // MongoClient.connect(url, function(err, client) {
    //     //client:连接成功后的mongodb客户端
    //     if(err) throw err;
    //     // 连接数据库，无则自动创建
    //     let db = client.db('config');
    //     let collection=db.collection('user'); 
    // });
    let client=await MongoClient.connect(url,{ useUnifiedTopology: true });
    let db=client.db(dbname)
    return {client,db}
}

//增
/**
 * 
 * @param {string}             colName   集合名称 
 * @param {object|Array}       data      插入的数据
 * 
 */
async function create(colName,data){
    console.log('增加')
    let {client,db}=await connect();
    //获取集合
    let collection=db.collection(colName);
    //insertMany()内的参数必须为Array
    //格式化data数据
    if(!Array.isArray(data)){
        data=[data]
    }
    let result=await collection.insertMany(data);
    client.close();
    return result;
}
//删
/**
 * 
 * @param {string} colName  集合名称
 * @param {object} query    查询条件
 */
async function remove(colName,query){
    let {client,db}=await connect();
    let collection=db.collection(colName);
    //格式化id
    // if(query._id&&typeof query._id==="string"){
    //     query._id=ObjectId(query._id)    
    // }
    formatid(query)
    let result=collection.deleteMany(query);
    client.close();
    return result
}
//改
/**
 * 
 * @param {string} colName 集合名称
 * @param {object} query 查询条件
 * @param {object} data  更新字段数据
 */
async function update(colName,query,data){
    let {db,client}=await connect();
    let collection=db.collection(colName);
    formatid(query);
    let result=await collection.updateMany(query,{$set:data});
    client.close();
    return result
}
//查
/**
 * 
 * @param {string} colName 集合名称
 * @param {object} query   查询条件
 * @param {object} option  配置条件
 */
async function find(colName,query={},option={}){
    /* console.log('查找到') */
    let {client,db}=await connect();
    let {fields,skip,limit,sort}=option

    //获取集合
    let collection=db.collection(colName);
    formatid(query)
    let result=await collection.find(query,{fields});
    //跳过的条数
    if(skip){
        result=result.skip(skip)
    }
    //限制的条数
    if(limit){
        result=result.limit(limit*1)
    }
    //排序的效果
    if(sort){
        // 处理排序规则
        //前端传递过来的参数
        // sort="price" / sort="price,1"
        let arr=sort.split(',');
        let key=arr[0];
        let value=arr[1]?arr[1]*1:-1;
        result=result.sort({
            [key]:value
        })
    }
    result=result.toArray()
    client.close();
    return result; 
}
module.exports={
    create,remove,update,find
}