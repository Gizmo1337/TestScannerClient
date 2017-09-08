import { Component } from '@angular/core';
import Handsontable from 'handsontable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any[];
  columns: object[] = [
    {data: 'id', title: 'Id'},
    {data: 'airdate', title: 'AirDate'},
    {data: 'airtime', title: 'AirTime'},
    {data: 'name', title: 'Name', width: 200},
    {data: 'number', title: 'Number'},
    {data: 'runtime', title: 'Runtime'},
    {data: 'season', title: 'Season'},
    {data: 'summary', title: 'Summary', renderer: 'html', width: 800},
  ];
 
}
