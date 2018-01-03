import {Component, NgZone} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    navitiaConfiguration: NavitiaSDKUXConfiguration = {
        token: '9e304161-bb97-4210-b13d-c71eaf58961c'
    };
    lines: Array<Line> = [];
    stopPoints: Array<string> = [];

    constructor(public navCtrl: NavController, public platform: Platform, private zone: NgZone) {
        platform.ready().then(() => {
            NavitiaSDK.init(this.navitiaConfiguration.token);
            NavitiaSDKUX.init(this.navitiaConfiguration);

            this.loadData();
        });
    }

    loadData() {
        NavitiaSDK.lines.coverageRegionUriLinesRequestBuilder()
            .withRegion('fr-idf')
            .withUri("/physical_modes/physical_mode:Metro")
            .get(response => {
                this.zone.run(() => {
                    this.lines = [];
                    for (var line of response.lines) {
                        this.lines.push(line);
                    }
                })
            }, error => {
                alert(error);
            });
    }
}
