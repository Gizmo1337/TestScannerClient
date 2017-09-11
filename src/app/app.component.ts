import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import {MdDialog} from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  settings = {

    comments: true,
    cell: [
      { row: 0, col: 0, comment: { value: 'Bar code example: 9200000000005 ' } },
      { row: 0, col: 1, comment: { value: 'Timestamp example: 04:00:38 PM 09/08/11 ' } },
      { row: 0, col: 2, comment: { value: 'Symbology example: EAN-13 ' } }
    ],
    columns: [{
      type: 'date',
      defaultData: '2015-02-02',
      dateFormat: 'DD-MM-YYYY',
      correctFormat: true,

    }],
    colHeaders: true,
    rowHeaders: true,
    startRows:20
  }

}
