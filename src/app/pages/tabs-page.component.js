import {WFMComponent} from "../../framework";

class TabsPageComponent extends WFMComponent{
    constructor(config) {
        super(config);
    }

    events() {
        return {
            'click .collapsible': 'onTabClick'
        }
    }
    onTabClick({target}) {
        if(!target.classList.contains('collapsible-header')) {
            return
        }
        this.el.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
        target.parentNode.classList.add('active');
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
    <div class="col s6 offset-s3">
     <ul class="collapsible">
        <li>
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li class="active">
          <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    </div>
`
});
