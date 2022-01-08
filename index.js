const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const json = require("koa-json");
const loginRouter = require("./routes/login");

const app = new Koa();

app.use(
  bodyParser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(loginRouter.routes());

app.listen(3000);
