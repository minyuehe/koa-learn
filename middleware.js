const { listenerCount } = require('koa');
const Koa = require('koa');
const app = new Koa();

const middleware = async (ctx, next) => {
    console.log("this is a middleware!");
    // next();
    // 如果没有next的中间件，koa会默认这是最后一个中间件，也就是洋葱模型的心！
}
const middleware1 = async (ctx, next) => {
    console.log("this is a middleware1!");
    await next();
    console.log("this is the ending of middleware1");
}
const middleware2 = async (ctx, next) => {
    console.log("this is a middleware2!");
    await next();
    console.log("this is the ending of middleware2");
}

app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);