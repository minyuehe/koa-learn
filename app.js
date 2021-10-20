const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = "hello cherry"
    console.dir(ctx)
});

router.get('/api', ctx => {
    ctx.body = "hello minyue"
});

router.get('/async', async (ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('2 second later!');
        }, 2000);
    });
    // 看出koa可以灵活使用async和await来对做异步处理
    ctx.body = result;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);