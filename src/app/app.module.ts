import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdSidenavModule, MdTabsModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule,MdDialogModule,MdTooltipModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HotTableModule } from 'angular-handsontable/index';
import {MdSelectModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';
import { ToolbarElementsComponent } from './toolbar-elements/toolbar-elements.component';
import { SendOptionsComponent } from './send-options/send-options.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TableComponent,
    ToolbarElementsComponent,
    SendOptionsComponent
  ],
  imports: [
    MdSidenavModule,
    BrowserModule,
    MdSelectModule,
    MdTabsModule,
    MdGridListModule,
    MdDialogModule,
    FormsModule,
    MdTooltipModule,
    HotTableModule,
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
