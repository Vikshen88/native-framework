import {wfm} from "..";

export class Component {
    constructor(config) {
        this.selector = config.selector;
        this.template = config.template;
        this.el = null
    }

    render() {
        this.el = document.querySelector(this.selector);
        if(!this.el) throw new Error (`Component with selector: ${this.selector} not found`);
        document.querySelector(this.selector).innerHTML = this.template;

        this._initEvents();
    }

    _initEvents() {
        if(wfm.isUndefined(this.events)) return;
        let events = this.events();

        Object.keys(events).forEach( key => {
            let listener = key.split(' ');
            this.el
                .querySelector(listener[1])
                .addEventListener(listener[0], this[events[key]].bind(this));
        })
    }
}
