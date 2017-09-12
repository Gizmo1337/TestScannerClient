import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTabsModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule,MdDialogModule,MdTooltipModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { HotTableModule } from 'angular-handsontable/index';
import {MdSelectModule} from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TableComponent } from './table/table.component';
import { ToolbarElementsComponent } from './toolbar-elements/toolbar-elements.component';
import { HotRegisterer } from 'angular-handsontable/index';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TableComponent,
    ToolbarElementsComponent
  ],
  imports: [
    HotRegisterer,
    MdSelectModule,
    MdTabsModule,
    MdGridListModule,
    MdDialogModule,
    MdTooltipModule,
    BrowserModule,
    FormsModule,
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
