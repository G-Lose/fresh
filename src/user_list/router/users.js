/*
 * @Author: your name
 * @Date: 2019-11-29 14:17:17
 * @LastEditTime: 2019-12-02 14:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1909_nodejs\04mysql\mogujie\router\users.js
 */
const express = require('express'); //模块访问：缓存
let {
    formatdata
} = require('../utils/formatdata'); //自定义模块
const bodyParser = require('body-parser')



const Router = express.Router();
Router.use(bodyParser.urlencoded({
    extended: false
}));
Router.use(bodyParser.json());
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");
    //跨域请求cors仲的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }

});

let {
    mongo
} = require('../db'); //引入操作数据库的模块
let {
    create
} = require('../utils/token');
/*
 * 用户管理
 * 查询是否存在
 * 注册
 * 登陆
 * 修改密码
 * 查询所有用户
 */

// Router.use('/', (req, res) => {
//     console.log('进入了users子路由');
//     res.send('进入了users子路由');
// })

//查询所有用户 /users进入这里
Router.get('/', async (req, res) => {
    let result = await mongo.find('fuser', req.query); //调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    if (result.length) {
        //成功
        res.send(formatdata({
            data: result
        }));
    } else {
        //失败
        res.send(formatdata({
            code: 0
        }));
    }
});

//注册 /users/reg
Router.post('/reg', async (req, res) => {
    // console.log(req.body);
    let result = await mongo.create('fuser', [req.body]); //调用封装好的find方法，查询数据并返回给前端
    // console.log(result);
    if (result.insertedCount) {
        //插入成功
        res.send(formatdata());
    } else {
        //插入失败
        res.send(formatdata({
            code: 0
        }));
    }
});

//验证用户名是否存在
Router.get('/check', async (req, res) => {
    let result = await mongo.find('fuser', req.query); //调用封装好的find方法，查询数据并返回给前端
    // console.log(result);
    if (result.length) {
        //找到，不给注册
        res.send(formatdata({
            code: 0
        }));
    } else {
        //没有找到，可以注册
        res.send(formatdata());
    }
});

//登陆 users/login
Router.get('/login', async (req, res) => {
    let {
        username,
        psw,
        keep
    } = req.query;
    let result = await mongo.find('fuser', {
        username,
        psw
    }); //调用封装好的find方法，查询数据并返回给前端 [{},{},{}]
    if (result.length) {
        //成功
        //判断是否要生成token：前端想保留7天免登陆的时候
        let token = '';
        if (keep) {
            token = create(username);
        }
        res.send(formatdata({
            //  authorization: token
            authorization: token
        })); //把token生成后发给前端
        // res.send('登陆成功');
    } else {
        //失败
        res.send(formatdata({
            code: 0
        }));
    }
});




module.exports = Router;