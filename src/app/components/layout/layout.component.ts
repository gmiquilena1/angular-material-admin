import { Component, OnInit, ViewChild } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @ViewChild('toolbar') toolbar;
  marginTop: string = "48px";

  constructor(private snackBar: MdSnackBar) {    
    window.onresize = () => {       
       this.getMarginTopSidenav();              
    }
   }   

  ngAfterViewInit() {
    window.setTimeout(() =>
     this.getMarginTopSidenav()
    );   
  }

  ngOnInit() {    
  }

  getMarginTopSidenav(){
    this.marginTop = this.toolbar.elementRef.nativeElement.offsetHeight + "px";
  }

  openSnackBar() {
    let message = "Ejemplo SnackBar";
    let action = "cerrar";
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
