const Koa = require('./koa/application');

const app = new Koa();

app.use((req, res) => {
    res.end('cherry');
})
app.listen(3000);
