const router = require("koa-router")();
const { SuccessModel } = require("../model/resModel");
const { PRIVATE_KEY, JWT_EXPIRED } = require("../conf/index");
const jwt = require("jsonwebtoken");

router.prefix("/api");
router.post("/login", async (ctx) => {
  const { password, username } = ctx.request.body;
  const token = jwt.sign({ username }, PRIVATE_KEY, { expiresIn: JWT_EXPIRED });
  ctx.body = new SuccessModel({
    token,
  });
});

router.get("/test", async (ctx) => {
  ctx.body = new SuccessModel("访问成功");
});

module.exports = router;
