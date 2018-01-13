///<reference types="@types/navitia-sdk"/>
import {Component, Input} from '@angular/core';
import {Line} from "navitia-sdk";

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
    _selected: Boolean = false;

    @Input()
    set line(line: Line) {
        this._line = line;
    }

    get line() {
        return this._line;
    }

    @Input()
    set selected(selected: Boolean) {
        this._selected = selected;
    }

    get selected() {
        return this._selected;
    }

    constructor() {
    }

    getClassForSelectedLine() {
        return this._selected ? 'selected-line' : '';
    }
}
