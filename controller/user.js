const { exec } = require("../db/mysql");

// 登录查询
const login = async (username, password) => {
  const sql = `select username from users where password='${password}' and username='${username}'`;
  const rows = await exec(sql);
  return rows[0] || {};
};

// 新增用户
const signIn = async (username, password) => {
  const sql = `insert into users (username, password) values ('${username}', '${password}')`;
  const rows = await exec(sql);
  return rows[0] || {};
};

// 修改密码
const modifyPassword = async (username, password) => {
  const sql = `update users set password='${password}' where username='${username}'`;
  const rows = await exec(sql);
  return rows[0] || {};
};

// 删除用户
const delUser = async (username) => {
  const sql = `delete from users where username=${username}`;
  console.log(sql);

  const rows = await exec(sql);
  console.log(rows);
  return rows[0] || {};
};

module.exports = {
  login,
  signIn,
  modifyPassword,
  delUser,
};
