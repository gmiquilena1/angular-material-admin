import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule,
        MdToolbarModule,MdSelectModule,MdListModule,MdIconModule,
        MdLineModule,MdMenuModule,MdSnackBarModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,
            MdToolbarModule,MdSelectModule,MdListModule,MdIconModule,
            MdLineModule,MdMenuModule,MdSnackBarModule],
  exports: [MdButtonModule, MdCheckboxModule,MdSidenavModule,
            MdToolbarModule,MdSelectModule,MdListModule,MdIconModule,
            MdLineModule,MdMenuModule,MdSnackBarModule],
})
export class CustomMaterialModule { }