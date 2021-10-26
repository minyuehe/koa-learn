const Router = require('koa-router');
const b = require('../api/b');

const router = new Router();

router.get('/bRoute', b);

module.exports = router;