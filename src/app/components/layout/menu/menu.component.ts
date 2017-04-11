import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  itemsMenu: any[];

  constructor() { }

  ngOnInit() {
    this.itemsMenu = [
      {
        icon:"home",
        title:"Inicio",
        link:"#",
        color_icon:"#2ECCFA"
      },
      {
        icon:"build",
        title:"Herramientas",
        link:"#",
        color_icon:"#D358F7"
      },
      {
        icon:"date_range",
        title:"Calendario",
        link:"#",
        color_icon:"#FE642E"
      },
      {
        icon:"info",
        title:"Información",
        link:"#",
        color_icon:"#04B404"
      }
    ]
  }

}
