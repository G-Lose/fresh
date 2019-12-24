const {
    MongoClient
} = require('mongodb');
const {
    DBurl,
    DBname
} = require("../config.json")


async function connect() {
    let client = await MongoClient.connect(DBurl);
    let db = client.db(DBname);
    return {
        db,
        client
    }
}

async function find(colname, query) {
    let {
        db,
        client
    } = await connect();
    let col = db.collection(colname);
    let result = await col.find(query).toArray();
    client.close();
    return result;
}
async function create(colname, data) {
    //1.连接数据库
    let {
        db,
        client
    } = await connect();
    //2.找到集合
    let col = db.collection(colname); //无则自动创建
    //3.插入数据到集合
    let result = await col.insertMany(data);
    // console.log(result);
    //4.关闭数据库
    client.close();

    return result;
}

// find('fuser', {});

module.exports = {
    find,
    create
};