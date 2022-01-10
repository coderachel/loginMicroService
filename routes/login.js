const router = require("koa-router")();
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { PRIVATE_KEY, JWT_EXPIRED } = require("../conf/index");
const jwt = require("jsonwebtoken");
const {
  login,
  signIn,
  modifyPassword,
  delUser,
} = require("../controller/user");
const { set, get } = require("../db/redis");

router.prefix("/api");

router.post("/login", async (ctx) => {
  const { password, username } = ctx.request.body;
  const result = await login(username, password);
  if (username === result.username) {
    const token = jwt.sign({ username }, PRIVATE_KEY, {
      expiresIn: JWT_EXPIRED,
    });
    await set(username, {
      token,
    });
    ctx.body = new SuccessModel({
      token,
    });
  } else {
    ctx.body = new ErrorModel("密码错误");
  }
});

router.post("/signin", async (ctx) => {
  const { password, username } = ctx.request.body;
  let result = await signIn(username, password);
  if (result) {
    ctx.body = new SuccessModel("注册成功");
  }
});

router.post("/modify/password", async (ctx) => {
  const { password, username } = ctx.request.body;
  const result = await modifyPassword(username, password);
  if (result) {
    ctx.body = new SuccessModel("密码修改成功");
  }
});

router.get("/delete/user", async (ctx) => {
  const { username } = ctx.query;
  const result = await delUser(username);
  if (result) {
    ctx.body = new SuccessModel("注销成功");
  }
});

router.get("/test", async (ctx) => {
  ctx.body = new SuccessModel("访问成功");
});

router.get("/token", async (ctx) => {
  const { username } = ctx.request.body;
  let result = await get(username);
  ctx.body = new SuccessModel(result);
});

module.exports = router;
