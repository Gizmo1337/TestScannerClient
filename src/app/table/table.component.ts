import { Component, OnInit } from '@angular/core';
import { HotRegisterer } from 'angular-handsontable';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any[];
  settings = {
    comments: true,
    cell: [
      { row: 0, col: 0, comment: { value: 'Bar code example: 9200000000005 ' } },
      { row: 0, col: 1, comment: { value: 'Timestamp example: 04:00:38 PM 09/08/11 ' } },
      { row: 0, col: 2, comment: { value: 'Symbology example: EAN-13 ' } }
    ],
    columns: [
      { data: 'BarCode', title: 'BarCode', width: '200' },
      { data: 'TimeStamp', title: 'TimeStamp', type: 'date',defaultData:'2015-02-02',dateFormat: 'DD/MM/YY',correctFormat: true,width:100},
      { data: 'Symbology', title: 'Symbology', type: 'autocomplete', source: ['EAN-8','EAN-13','RSS','UCC','UPC-A','UPC-E','Code-128','Code-39','GS1-128'],
      strict: true},
    ],
    colHeaders: true,
    rowHeaders: true,
    startRows: 20,
    rowHeights: "23px"
  
    
  }

 



  constructor() { 
    var  tmpData = JSON.parse(JSON.stringify('BarCode'));  
  }
  ngOnInit() {

  }

}
