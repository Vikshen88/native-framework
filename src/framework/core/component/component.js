import {_} from "../../index";

export class Component {
    constructor(config) {
        this.selector = config.selector;
        this.template = config.template;
        this.styles = config.styles;
        this.el = null
    }

    render() {
        initStyles(this.styles);

        this.el = document.querySelector(this.selector);
        if(!this.el) throw new Error (`Component with selector: ${this.selector} not found`);
        document.querySelector(this.selector).innerHTML = compileTemplate(this.template, this.data);

        initEvents.call(this);
    }
}
function initStyles(styles) {
    if(_.isUndefined(styles)) return;

    let style = document.createElement('style');
    style.innerHTML = styles;
    document.head.appendChild(style);

}

function initEvents() {
    if(_.isUndefined(this.events)) return;
    let events = this.events();

    Object.keys(events).forEach( key => {
        let listener = key.split(' ');
        this.el
            .querySelector(listener[1])
            .addEventListener(listener[0], this[events[key]].bind(this));
    })
}

function compileTemplate(template, data) {
    if(_.isUndefined(data)) return template;

    let regex = /\{{(.*?)}}/g

    template = template.replace(regex, (str, d) => {
        let key = d.trim();

        return data[key];
    });

    return template;
}
