import {router} from "./routing/router";
import {_} from "..";
import {renderComponent} from "framework/core/component/render.component";
import {RoutingModule} from "framework/core/routing/routing.module";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.appRoutes = config.routes;
    }

    start() {
        initComponents(this.bootstrapComponent, this.components);
        initRouting(this.appRoutes);
    }

}

function initComponents(bootstrap, components) {
    if(_.isUndefined(bootstrap)) {
        throw new Error('Bootstrap component is not defined');
    }

    [bootstrap, ...components].forEach(renderComponent);
}

function initRouting(routes) {
    if(_.isUndefined(routes)) return;

    let routing = new RoutingModule(routes);
    routing.init();
}
