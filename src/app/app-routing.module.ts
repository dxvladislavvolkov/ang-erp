import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { ContactsComponent, ContactsModule } from './pages/contacts/contacs.component';
import { SettingsComponent, SettingsModule } from './pages/settings/settings.component';
import { AboutComponent, AboutModule } from './pages/about/about.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  }, {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts' }
  }, {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  }, {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' }
  }
];

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forRoot(routes),
        SettingsModule,
        ContactsModule,
        AboutModule
    ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
