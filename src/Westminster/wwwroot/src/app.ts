import {Router} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'racuni'], moduleId: './racuni', nav: true, title: 'Welcome' }
        ]);

        this.router = router;
    }
}