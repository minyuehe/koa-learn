const combineRouter = require('koa-combine-routers');
const aRouter = require('./aRoute');
const bRouter = require('./bRoute');

module.exports = combineRouter(
    aRouter,
    bRouter
);