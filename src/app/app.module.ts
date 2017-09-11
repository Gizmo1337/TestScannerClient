import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import {MdTooltipModule} from '@angular/material';
import { HotTableModule } from 'angular-handsontable/index';
import {MdDialogModule} from '@angular/material';


@NgModule({
  declarations: [
    
    AppComponent
  ],
  imports: [
    MdDialogModule,
    MdTooltipModule,
    BrowserModule,
    HotTableModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
