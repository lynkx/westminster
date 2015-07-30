export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'bills'], moduleId: './bills', nav: true, title: 'Welcome' }
        ]);
        this.router = router;
    }
}
//# sourceMappingURL=app.js.map