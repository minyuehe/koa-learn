import Koa from 'koa';
import path from 'path';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import koaBody from 'koa-body';
import json from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import router from './routes/router';

const app = new Koa();
const middleware = compose([
    koaBody(),
    json({ pretty: false, param: 'pretty' }),
    cors(),
    statics(path.join(__dirname, '../public')),
    helmet()
])

app.use(middleware);
app.use(router());
app.listen(3000);