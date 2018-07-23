import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

@Component({
    selector: 'action-bar',
    templateUrl: 'action-bar.component.html'
})

export class ActionBarComponent {

    constructor() {}

    refreshData() {

    }

    revert() {
        
    }

    saveChanges() {
        
    }
}

@NgModule({
    imports: [
        CommonModule,
        DxToolbarModule
    ],
    declarations: [ ActionBarComponent ],
    exports: [ ActionBarComponent ]
})
export class ActionBarModule { }

