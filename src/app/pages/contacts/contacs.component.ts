import { Component, NgModule } from '@angular/core';

import { InfoFormModule } from './components/info-form/info-form.component';
import { ActionBarModule } from '../../shared/components/action-bar/action-bar.component';

@Component({
    templateUrl: 'contacts.template.html'
})

export class ContactsComponent {
    constructor() {}
}

@NgModule({
    imports: [ActionBarModule, InfoFormModule],
    declarations: [ContactsComponent]
})
export class ContactsModule { }
