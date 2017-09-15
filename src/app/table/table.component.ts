import { Component, OnInit } from '@angular/core';
import { HotRegisterer } from 'angular-handsontable/index';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  instance: string = "hotInstance";
  coordX: string;
  coordY: string;
  newValue: string;
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
      { data: 'TimeStamp', title: 'TimeStamp', type: 'date', defaultData: '2015-02-02', dateFormat: 'DD/MM/YY', correctFormat: true, width: 100 },
      {
        data: 'Symbology', title: 'Symbology', type: 'autocomplete', source: ['EAN-8', 'EAN-13', 'RSS', 'UCC', 'UPC-A', 'UPC-E', 'Code-128', 'Code-39', 'GS1-128'],
        strict: true
      },
    ],
    colHeaders: true,
    rowHeaders: true,
    startRows: 20,
    rowHeights: "23px"
  }
  constructor(private _hotRegisterer: HotRegisterer) { }
  // where length is 3 -> add to special array.
  getData() {
    var hot_instance = this._hotRegisterer.getInstance(this.instance);
    var data = hot_instance.getData();
    var reData = new Array(new Array);
    console.log('working...get data');

    console.log(data.length);
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j <= 2; j++) {
        if (data[i][j] !== null && data[i] !== undefined) {
          reData[i] = data[i];

          //console.log ('value for data I:' + i + 'j:' + j)
        }
        //else {console.log(data[i][j])        
      }
    }
    //   for(var i = 0; i < data.length; i++) {
    //     if(!reData[i]) {
    //       console.log("taie !")
    //       reData.splice(i,1);
    //     }
    //   }
    console.log("redata: ", reData)
    console.log('data: ', data);
    //  console.log(reData[0][0])
    //  console.log(reData[1])
    //  console.log(reData[3])
    var BarCodes = new Array();
    var TimeStamp = new Array();
    var Symbology = new Array();
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] !== null) {
        BarCodes.push(data[i][0]);
        TimeStamp.push(data[i][1]);
        Symbology.push(data[i][2]);
      }
    }
    var header =
      "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n <gfk_envelope> \"\n  <header sw=\"CSA_2\" sw_ver=\"3.4.0\" scanner_sw=\"RBBV0147\" scanner_os=\"\" os_version=\"Windows 7 Professional Service Pack 1\" loaddll_version=\"1.0.20.0\">\n    <connection type=\"1\"/> \n  </header>\n  <body>\n    <codes deviceid=\"000000000P602395\" device=\"0\">"
    var content =
      "\n    <item barcode=\"Sa9999\" timestamp=\"10:36:26 AM 09/13/17\" symbology=\"Code 128\"/>"
    var footer =
      "\n    </codes>\n  </body>\n</gfk_envelope>"


    for (var i = 0; i < BarCodes.length; i++) {
      content += "\n    <item barcode=\"" + BarCodes[i] + "\" timestamp=\"12:00:00 AM " + TimeStamp[i] + "\" symbology=\"" + Symbology[i] + "\"/>"
    }

    var result = header + content + footer;


    var lil = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\r\n<gfk_envelope>\r\n  <header sw=\"CSA_2\" sw_ver=\"3.4.0\" scanner_sw=\"RBBV0147\" scanner_os=\"\" os_version=\"Windows 7 Professional Service Pack 1\" loaddll_version=\"1.0.20.0\">\r\n    <connection type=\"1\"/>\r\n  </header>\r\n  <body>\r\n    <codes deviceid=\"000000000P602395\" device=\"0\">\r\n      <item barcode=\"Sa9999\" timestamp=\"15:31:26 AM 09/14/17\" symbology=\"Code 128\"/>\r\n      <item barcode=\"victor\" timestamp=\"10:36:28 AM 09/13/17\" symbology=\"Code 128\"/> \r\n       <item barcode=\"cristi\" timestamp=\"10:36:28 AM 09/13/17\" symbology=\"Code 128\"/> \r\n    </codes>\r\n  </body>\r\n</gfk_envelope>\r\n";
    
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "http://ecpo-descan-preprod.gfk.com/dynaload_extrec.aspx?pageid=clickerload");
    xhr.setRequestHeader("content-type", "application/xml");
    xhr.setRequestHeader("authorization", "Basic dnJjaGVyOnZyY2hlcnBzdw==");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "28cb47ed-8c64-d954-3ddf-8a3329a15359");
    
    xhr.send(result);

    console.log(result);
    console.log(BarCodes);
    console.log(TimeStamp);
    console.log(Symbology);
  }
  ngOnInit() { }
}