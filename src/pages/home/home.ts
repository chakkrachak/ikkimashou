import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    stopPoints = ['Stop Point 1', 'Stop Point 2'];

    constructor(public navCtrl: NavController) {

    }

}
