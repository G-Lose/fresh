var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bgw'
});

module.exports = function (sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, results) {
            if (error) return reject(error);
            resolve(results)
        });
    })
}