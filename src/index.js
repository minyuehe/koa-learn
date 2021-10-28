import Koa from 'koa';
import path from 'path';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import koaBody from 'koa-body';
import json from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import router from './routes/router';
import compress from 'koa-compress';

const app = new Koa();
const isDev = process.env.NODE_ENV === "development";
const middleware = compose([
    koaBody(),
    json({ pretty: false, param: 'pretty' }),
    cors(),
    statics(path.join(__dirname, '../public')),
    helmet()
]);

if (!isDev) {
    app.use(compress());
}
console.log(process.env.NODE_ENV,"here");

app.use(middleware);
app.use(router());
app.listen(3000);