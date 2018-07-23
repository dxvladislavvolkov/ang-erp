import { Component, NgModule, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { DxTreeViewModule } from 'devextreme-angular/ui/tree-view';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import * as vector from "devextreme/viz/vector_map";

import { Router } from '@angular/router';

@Component({
    selector: 'navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styles: [`
        :host ::ng-deep .dx-scrollable-content > .dx-treeview-node-container > li.dx-treeview-node {
            border-bottom: 1px solid rgba(221, 221, 221, 0.1);
        }
    `]
})
export class NavigationMenuComponent implements OnInit {
    @Output() clickOnMenuButton = new EventEmitter<boolean>();
    @Output() selectedItemsChanged = new EventEmitter<string>();
    @Input() navigationMenuOpened: boolean;
    menuItems = [{ 
        text: "Dashboard",
        icon: "menu",
        items: [{
            text: "Profile",
            path: "profile"
        }, {
            text: "Settings",
            path: "settings"
        }]
    }, {
        text: "Customers",
        icon: "card",
        items: [{
            text: "Contacts",
            path: "contacts"
        }, {
            text: "Sales",
            path: "sales"
        }, {
            text: "Feedback",
            path: "feedback"
        }, {
            text: "Tasks",
            path: "tasks"
        }, {
            text: "Birthdays",
            path: "birthdays"
        }]
    }, {
        text: "Reception",
        icon: "comment"
    }, {
        text: "Reservations",
        icon: "event"
    }, {
        text: "Resources"
    }, {
        text: "House Keeping"
    }, {
        text: "Laundry"
    }, {
        text: "Maintenance"
    }, {
        text: "Mailing"
    }, {
        text: "Reports"
    }
  ];

  constructor(private router: Router) {
    console.log(vector);

   }

  ngOnInit() {}

  showMenu = () => {
      this.clickOnMenuButton.emit(this.navigationMenuOpened);
  }

  onItemSelectionChanged(event) {
      this.selectedItemsChanged.emit(event.itemData.text);
      console.log(event)
      this.router.navigate([event.itemData.path]);
  }
}

@NgModule({
    imports: [ DxTreeViewModule, DxToolbarModule ],
    declarations: [ NavigationMenuComponent ],
    exports: [ NavigationMenuComponent ]
})
export class NavigationMenuModule { }
