import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material.module'
import 'hammerjs';

//https://swimlane.gitbooks.io/ngx-datatable/content/
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { NotificationsComponent } from './components/layout/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,    
    MenuComponent, 
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
