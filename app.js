import Koa from 'koa';
import logger from 'koa-logger';
import bluebird from 'bluebird';
import session from 'koa-session';
import bodyparser from 'koa-bodyparser';
import RoutesConfig from './router/index';

const routesConfig = new RoutesConfig;

const app = new Koa();
app.use(logger());
app.use(session({
    key: 'koa:sess',   //default "koa:sess"
    maxAge: 1800000,  //session超时时间：30分钟
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
}, app));

app.use(bodyparser());

app.use(routesConfig.initRouter().routes())
      .use(routesConfig.initRouter().allowedMethods());

app.listen(3000);

console.log('service is starting, https://localhost:3000/api/welcome');
