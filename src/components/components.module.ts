import { NgModule } from '@angular/core';
import { HomeLineItemComponent } from './home-line-item/home-line-item';
import { HomeStopPointItemComponent } from './home-stop-point-item/home-stop-point-item';
@NgModule({
	declarations: [HomeLineItemComponent,
    HomeStopPointItemComponent],
	imports: [],
	exports: [HomeLineItemComponent,
    HomeStopPointItemComponent]
})
export class ComponentsModule {}
