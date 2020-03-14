import {initComponents} from "framework/core/component/init-components";
import {initRouting} from "framework/core/routing/init-routing";

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



