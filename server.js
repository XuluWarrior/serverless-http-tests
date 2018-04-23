const serverless = require('serverless-http');
//const serve = require('koa-router-static');
const json = require('koa-json');

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();


router.get('/serverless-http-tests-koa', (ctx) => ctx.body = ctx);
//router.get('/serverless-http-tests-koa/static/*', serve('./public'));

app.use(json());

// Hack to force originalUrl to match value set by serverless-http
app.use((ctx, next) => {
    return next().then((ctx) => {
        ctx.originalUrl = ctx.req.originalUrl || ctx.originalUrl;
    })
});

app.use(router.routes());

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));