import {Component, Input} from '@angular/core';

/**
 * Generated class for the HomeLineItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'home-line-item',
    templateUrl: 'home-line-item.html'
})
export class HomeLineItemComponent {

    _line: Line;

    @Input()
    set line(line: Line) {
        this._line = line;
    }

    get line() {
        return this._line;
    }

    constructor() {
    }

}
