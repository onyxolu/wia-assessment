import { Routes } from '@angular/router';
import { DevicesComponent } from 'src/app/pages/devices/devices.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { SpacesComponent } from 'src/app/pages/spaces/spaces.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'spaces',      component: SpacesComponent },
    { path: 'spaces/:id/devices',     component: DevicesComponent },
    { path: 'spaces/:id/devices/:id2/events',     component: EventsComponent },
    {path: 'settings', component: SettingsComponent}

];