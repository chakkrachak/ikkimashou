///<reference path="../../@types/navitia-sdk/index.d.ts"/>
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
    stopPointsDeparture: Array<StopPoint> = [];
    stopPointsArrival: Array<StopPoint> = [];
    journeyDeparture?: StopPoint;
    journeyArrival?: StopPoint;

    constructor(public navCtrl: NavController, public platform: Platform, private zone: NgZone) {
        platform.ready().then(() => {
            NavitiaSDK.init(this.navitiaConfiguration.token);
            NavitiaSDKUX.init(this.navitiaConfiguration);

            this.fillLines();
        });
    }

    fillLines() {
        NavitiaSDK.lines.coverageRegionUriLinesRequestBuilder()
            .withRegion('fr-idf')
            .withUri("/physical_modes/physical_mode:Metro")
            .get(response => {
                this.zone.run(() => {
                    this.lines = [];
                    for (var line of response.lines) {
                        this.lines.push(line);
                    }
                    this.lines.sort( (a, b): number => {
                        if (this.toNumber(a.code) < this.toNumber(b.code)) {
                            return -1;
                        } else if ((this.toNumber(a.code) == this.toNumber(b.code))) {
                            if ((a.code.includes(b.code))) {
                                return 1;
                            } else {
                                return -1;
                            }
                        } else {
                            return 1;
                        }
                    });
                })
            }, error => {
                alert(error);
            });
    }

    fillStopPoints(line: Line, stopPoints: Array<StopPoint>) {
        NavitiaSDK.stopPoints.coverageRegionUriStopPointsRequestBuilder()
            .withRegion('fr-idf')
            .withUri('/physical_modes/physical_mode:Metro/lines/'+line.id)
            .get(response => {
                this.zone.run(() => {
                    stopPoints.length = 0;
                    for (var stopPoint of response.stop_points) {
                        stopPoints.push(stopPoint);
                    }
                });
            }, error => {
                alert(error);
            });
    }

    launchJourney() {
        if (this.journeyDeparture === undefined || this.journeyDeparture === null) {
            alert('Choose departure');
            return;
        }
        if (this.journeyArrival === undefined || this.journeyArrival === null) {
            alert('Choose arrival');
            return;
        }

        var journeyParams = {
            originId: this.journeyDeparture.id,
            destinationId: this.journeyArrival.id,
        };

        NavitiaSDKUX.invokeJourneyResults(journeyParams, function() {}, function(error) {
            alert(error);
        });
    }

    toNumber(s: string): number {
        return Number(s.replace(/[a-zA-Z]+/gi, ''));
    }
}
