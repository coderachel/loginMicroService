const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const koaJwt = require("koa-jwt");
const { loginRouter } = require("./routes/index");
const { PRIVATE_KEY } = require("./conf/index");
const { ErrorModel } = require("./model/resModel");

const app = new Koa();

// 对token进行校验
// 默认是请求进来的header Authorization: `Bearer jwt`
const jwtAuthWhite = koaJwt({ secret: PRIVATE_KEY }).unless({
  // 登录接口不需要验证
  path: [/^\/api\/login/, /^\/api\/signin/],
});

const jwtAuthRouter = function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = new ErrorModel("没有权限访问");
    } else {
      throw err;
    }
  });
};

app.use(jwtAuthRouter);
app.use(jwtAuthWhite);

app.use(
  bodyParser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(loginRouter.routes());

app.listen(3000);
