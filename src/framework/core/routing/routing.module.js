import {router} from "framework/core/routing/router";
import {_} from "framework/tools/util";
import {renderComponent} from "framework/core/component/render-component";

export class RoutingModule {
    constructor(routes) {
        this.routes = routes
    }

    init(){
        window.addEventListener('hashchange ', renderRoute.bind(this));
        renderRoute.call(this);
    }
}

function renderRoute() {
    let url = router.getUrl();
    let route = this.routes.find(r => r.path === url);

    if(_.isUndefined(route)) {
        route = this.routes.find(r => r.path === '**');
    }

    document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`;
    renderComponent(route.component);

}
