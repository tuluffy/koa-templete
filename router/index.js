import Router from 'koa-router';
import WelcomeCtrl from './../src/controller/welcome';

const welcomeCtrl = new WelcomeCtrl;

class RoutesConfig {
    initRouter(){
        const router = new Router({
            prefix: '/api',
        });

        router.get('/welcome', welcomeCtrl.welcome());

        return router;
    };
};

export default RoutesConfig;