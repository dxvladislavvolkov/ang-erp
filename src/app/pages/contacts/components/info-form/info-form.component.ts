import { Component, NgModule } from '@angular/core';

import { DxFormModule } from 'devextreme-angular/ui/form';

@Component({
    selector: 'info-form',
    templateUrl: 'info-form.template.html'
})

export class InfoFormComponent {
    customerInfo = {
        ID: 1,
        FirstName: "Sandra",
        LastName: "Johnson",
        Sex: "Female",
        BirthDate: "1985/03/16",
        Address: "351 S Hill St., Los Angeles, CA",
        Phone: "360-684-1334",
        Email: "jheart@dx-email.com"
    }
    constructor() {}
}

@NgModule({
    imports: [DxFormModule],
    declarations: [InfoFormComponent],
    exports: [ InfoFormComponent ]
})
export class InfoFormModule { }
