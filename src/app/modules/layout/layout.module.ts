import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarDirective } from 'src/app/shared/components/sidenav/sidebar.directive';
@NgModule({
  declarations: [HeaderComponent,SidenavComponent,SidebarDirective],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports:[
    HeaderComponent,
    SidenavComponent
  ]
})
export class LayoutModule { }
