import {WFMComponent} from "../../framework";

class NotFoundComponent extends WFMComponent{
    constructor(config) {
        super(config);
    }
}

export const notFoundComponent = new NotFoundComponent({
    selector: 'app-not-found',
    template: `
      <div style="display: flex; align-items: center; justify-content: center">
      <div>
      <h2>Страница не найдена</h2>
      <a href="#">Перейти на главную</a>
    </div>
    </div>
`
});
