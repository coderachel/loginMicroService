## 项目说明

实现一个登录认证的微服务

## 技术选型

- 框架：koa
- 路由：koa-router
- 中间件：bodyparser koa-jwt jsonwebtoken

## 项目运行

npm i

npm start

## 认证模块目前完成的部分

1. 接口已经调通并且添加了返回的数据模型
2. 使用 jsonwebtoken 生成 token，使用 koa-jwt 进行 jwt 认证
3. 对接 mysql 实现数据库用户的增删查功能，同时也支持修改密码
4. 对接 redis 数据库，缓存用户的登录信息
