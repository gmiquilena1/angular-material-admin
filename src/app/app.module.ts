import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './modules/custom-material.module'
import 'hammerjs';

//https://swimlane.gitbooks.io/ngx-datatable/content/
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { NotificationsComponent } from './components/layout/notifications/notifications.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,    
    MenuComponent, 
    NotificationsComponent, 
    DataTableComponent,
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
