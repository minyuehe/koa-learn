import Koa from 'koa';
const path = require('path');
const statics = require('koa-static');
const helmet = require('koa-helmet');
const router = require('./routes/router');

const app = new Koa();

app.use(helmet());
app.use(statics(path.join(__dirname, '../public')));
app.use(router());

app.listen(3000);