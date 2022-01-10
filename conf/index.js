const PRIVATE_KEY = "LOGIN_MICRO_SERVICE_PRIKEY_KEY";
const JWT_EXPIRED = 24 * 60 * 60 * 1000;
const MYSQL_CONF = {
  port: "3306",
  password: "root",
  user: "root",
  database: "loginmicroservices",
  host: "localhost",
};

const REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

module.exports = {
  PRIVATE_KEY,
  JWT_EXPIRED,
  MYSQL_CONF,
  REDIS_CONF,
};
