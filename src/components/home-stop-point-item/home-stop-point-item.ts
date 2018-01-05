import {Component, Input} from '@angular/core';

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

    @Input()
    set stopPoint(stopPoint: StopPoint) {
        this._stopPoint = stopPoint;
    }

    get stopPoint() {
        return this._stopPoint;
    }

    constructor() {
    }
}
