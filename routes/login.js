const router = require("koa-router")();
const { SuccessModel } = require("../model/resModel");

router.prefix("/api");

router.post("/login", async (ctx) => {
  const { password, username } = ctx.request.body;
  ctx.body = new SuccessModel({
    password,
    username,
  });
});

module.exports = router;
