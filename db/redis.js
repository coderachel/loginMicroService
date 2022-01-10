const { createClient } = require("redis");

let redisClient;

async function createRedis() {
  if (redisClient) return;

  redisClient = createClient();

  redisClient.on("error", (err) => {
    console.log(err);
  });

  await redisClient.connect();
}

createRedis();

async function set(key, val) {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  await redisClient.set(key, val);
}

async function get(key) {
  let result = await redisClient.get(key);
  return result ? JSON.parse(result) : null;
}

module.exports = {
  set,
  get,
};
