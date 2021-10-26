const Router = require('koa-router');
const a = require('../api/a');

const router = new Router();

router.get('/aRoute', a);

module.exports = router;