import { Component, OnInit } from '@angular/core';
import { MENU_LIST } from '../../shared/menu-items';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.sass']
})
export class AdminLayoutComponent implements OnInit {
  public opened: boolean = false;
  public sideList = [];
  public isOpen: boolean = false;
  public _dock: boolean = false;
  public _over: boolean = false;
  public activeMode = 'push';
  theme = 'light';


  constructor() { }
  
    ngOnInit() {
      
          this.sideList = this.withIsOpen(MENU_LIST);
          // console.log(this.sideList)
          //     this.sideList.forEach(element => {
          //        element.list.forEach(element1 => {
          //          console.log(element1.menu)
          //        });
          //     });
          // 
        }
      
        withIsOpen(list) {
          return list.map(menus => {
            menus.isOpen = false;
            return menus;
          })
        }
  
  toggleOpened() {
    this.opened = !this.opened;
  }
  

  dropdown(menuItem) {
    menuItem.isOpen = !menuItem.isOpen;
  }

 

  public _MODES: Array<string> = ['over', 'push', 'slide'];

 

  toggleRight(event) {
    this.isOpen = !this.isOpen;
  }

  public toggleMode( mode ): void {
    console.log('activeMode : ', mode);
    this.activeMode = mode;
  }


  public _toggleDock(): void {
    console.log(this._dock)
    this._dock = !this._dock;
  }
}
