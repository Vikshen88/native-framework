import {WFMComponent} from "../../framework";

class HomePageComponent extends WFMComponent{
    constructor(config) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
   selector: 'app-home-page',
   template: `
   <div class="col s6 offset-s3">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Главная страница</span>
          <p>Нет функционала</p>
        </div>
        <div class="card-action">
          <a href="#">Перейти на другую страницу</a>
        </div>
      </div>
    </div>
  </div>
`
});
