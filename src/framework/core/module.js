import {router} from "../tools/router";
import {wfm} from "..";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.appRoutes = config.routes;
    }

    start() {
        this.initComponents();
        if (this.appRoutes) this.initRoutes();
    }

    initComponents() {
        this.bootstrapComponent.render();
        this.components.forEach(this.renderComponent.bind(this));
    }

   async renderComponent(c){
        if(!wfm.isUndefined(c.onInit)) c.onInit();
        c.render();
        if(!wfm.isUndefined(c.afterInit)) c.afterInit();
    }

    initRoutes(){
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }

    renderRoute() {
        let url = router.getUrl();
        let route = this.appRoutes.find(r => r.path === url);

        if(wfm.isUndefined(route)) {
            route = this.appRoutes.find(r => r.path === '**');
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`;
        this.renderComponent(route.component);

    }


}
