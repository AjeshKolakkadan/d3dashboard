import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RadialComponent } from 'src/app/shared/components/chart/radial/radial.component';
import { InfocardComponent } from 'src/app/shared/components/infocard/infocard.component';
import { SharedModule } from 'src/app/shared/shared.module';
 


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports:[
  ]
})
export class DashboardModule { }
