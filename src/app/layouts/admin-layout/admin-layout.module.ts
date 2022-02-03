import { NgModule } from '@angular/core';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { WiaService } from 'src/app/services/wia.service';
import { WiaConfig } from 'src/app/common/config';
import {  SpacesComponent } from 'src/app/pages/spaces/spaces.component';
import { DevicesComponent } from 'src/app/pages/devices/devices.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';




@NgModule({
  declarations: [
    SidebarComponent,
    SpacesComponent,
    DevicesComponent,
    EventsComponent,
    SettingsComponent,
    AdminLayoutComponent
  ],
  imports: [
    NgbModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule
  ],
  providers: [WiaService, WiaConfig]
})
export class AdminLayoutModule { }
