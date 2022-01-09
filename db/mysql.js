const mysql = require("mysql");
const { MYSQL_CONF } = require("../conf/index");

// 创建链接对象
const conn = mysql.createConnection(MYSQL_CONF);

// 开始连接
conn.connect();

// 统一执行 sql 的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    conn.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}

module.exports = {
  exec,
  escape: mysql.escape,
};
