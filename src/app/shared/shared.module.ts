import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutComponent } from './components/chart/donut/donut.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { RadialComponent } from './components/chart/radial/radial.component';
import { BarchartComponent } from './components/chart/barchart/barchart.component';
@NgModule({
  declarations: [
    RadialComponent, InfocardComponent,
    DonutComponent,
    BarchartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    RadialComponent, InfocardComponent,
    DonutComponent, BarchartComponent
  ]
})
export class SharedModule { }
