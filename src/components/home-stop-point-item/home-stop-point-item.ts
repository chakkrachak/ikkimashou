///<reference types="navitia-sdk"/>
import {Component, Input} from '@angular/core';
import {StopPoint} from "navitia-sdk";

/**
 * Generated class for the HomeStopPointItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'home-stop-point-item',
    templateUrl: 'home-stop-point-item.html'
})
export class HomeStopPointItemComponent {

    _stopPoint: StopPoint;
    _selected: Boolean = false;

    @Input()
    set stopPoint(stopPoint: StopPoint) {
        this._stopPoint = stopPoint;
    }

    get stopPoint() {
        return this._stopPoint;
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

    getClassForSelected() {
        return this._selected ? 'selected' : '';
    }
}
