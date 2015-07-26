import {Router} from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'bills'], moduleId: './bills', nav: true, title: 'Welcome' }
        ]);

        this.router = router;
    }
}