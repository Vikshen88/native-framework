import {WFMComponent} from "../framework";

class AppComponent extends WFMComponent{
   constructor(config){
       super(config);
   }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
    <app-header></app-header>
    <div class="row">
    <router-outlet></router-outlet>`
});
