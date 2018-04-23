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
app.use(router.routes());

module.exports.handler = serverless(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));