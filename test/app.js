const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const json = require('koa-json');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = "hello cherry"
    console.dir(ctx)
});

router.get('/get', ctx => {
    const params = ctx.request.query;
    console.log(params);
    ctx.body = {
        ...params
    }
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

// header中信息校验，router中做出制定逻辑
router.post('/api/user', async (ctx) => {
    const { header, body } = ctx.request;

    if (!(header.role && header.role === "admin")) {
        ctx.body = {
            code: 401,
            msg: "unauthorized post"
        }
    } else if (!(body.name && body.email)) {
        ctx.body = {
            code: 404,
            msg: "name or email can't be null!"
        }
    } else {
        ctx.body = {
            code: "200",
            data: {
                ...body
            },
            msg: 'success'
        }
    }
})

app.use(koaBody());
app.use(json());

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);