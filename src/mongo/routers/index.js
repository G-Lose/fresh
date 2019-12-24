const express = require('express');
let Router = express.Router();

let GoodsRouter = require('./goods')
let UserRouter = require('./user')
let RegRouter = require('./reg')
let LoginRouter = require('./login')
let HomeRouter=require('./home')

Router.use(express.json(), express.urlencoded({extended:false}),)
//CORS解决跨域
Router.use((req, res, next) => {
    let AllowOrigin = ['http://localhost:8080', 'http://localhost:8081']
    let Origin = req.get('Origin')
    if (AllowOrigin.includes(Origin)) {
        res.set({
            'Access-Control-Allow-Origin': Origin,
            'Access-Control-Allow-Methods': 'GET,POST,PATCH,PUT,DELETE,OPTION',
            'Access-Control-Allow-HEADERS': 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With'
        })
    }
    // 跨域请求CORS中的预请求
    // console.log(req.method);
    
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})
Router.use('/goods', GoodsRouter)
Router.use('/user', UserRouter)
Router.use('/reg', RegRouter)
Router.use('/login', LoginRouter)
Router.use('/home', HomeRouter)


module.exports = Router;