import { Component, OnInit } from '@angular/core';
import { HotRegisterer } from 'angular-handsontable/index';
import { DataService } from '../data.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  //variables for data manipulation
  server: string = "";
  urlConcat: string = "http://ecpo-descan-preprod.gfk.com/dynaload_extrec.aspx?pageid=clickerload"
  ScannerId: object;

  instance: string = "hotInstance";
  coordX: string;
  coordY: string;
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
  constructor(private _hotRegisterer: HotRegisterer, public DataService: DataService) { }

  // will retrive all data from the  Data table and build a xml with ECPO 4 standards.
  getData() {
    var GfkServer: any = this.DataService.transferdataServer();
    var ScannerID: any = this.DataService.transferdata();
    try {
      ScannerID = ScannerID.scannerId;
    } catch (error) {
      console.log("nope")
    }
    ErrorNoId(ScannerID, GfkServer);
   
    var hot_instance = this._hotRegisterer.getInstance(this.instance);
    var data = hot_instance.getData();
    // console.log('working...get data');
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
      "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n <gfk_envelope> \"\n  <header sw=\"CSA_2\" sw_ver=\"3.4.0\" scanner_sw=\"RBBV0147\" scanner_os=\"\" os_version=\"Windows 7 Professional Service Pack 1\" loaddll_version=\"1.0.20.0\">\n    <connection type=\"1\"/> \n  </header>\n  <body>\n    <codes deviceid=\"" + ScannerID + "\" device=\"0\">"
    var content = ""
    // "\n    <item barcode=\"Sa9999\" timestamp=\"10:36:26 AM 09/13/17\" symbology=\"Code 128\"/>"
    var footer =
      "\n    </codes>\n  </body>\n</gfk_envelope>"

    for (var i = 0; i < BarCodes.length; i++) {
      content += "\n    <item barcode=\"" + BarCodes[i] + "\" timestamp=\"12:00:00 AM " + TimeStamp[i] + "\" symbology=\"" + Symbology[i] + "\"/>"
    }
    var result = header + content + footer;

    sessionStorage.setItem("result", result);

    //sessionStorage.setItem("urlConcat", this.urlConcat);

    // var fullExample = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\r\n<gfk_envelope>\r\n  <header sw=\"CSA_2\" sw_ver=\"3.4.0\" scanner_sw=\"RBBV0147\" scanner_os=\"\" os_version=\"Windows 7 Professional Service Pack 1\" loaddll_version=\"1.0.20.0\">\r\n    <connection type=\"1\"/>\r\n  </header>\r\n  <body>\r\n    <codes deviceid=\"000000000P602395\" device=\"0\">\r\n      <item barcode=\"Sa9999\" timestamp=\"15:31:26 AM 09/14/17\" symbology=\"Code 128\"/>\r\n      <item barcode=\"victor\" timestamp=\"10:36:28 AM 09/13/17\" symbology=\"Code 128\"/> \r\n       <item barcode=\"cristi\" timestamp=\"10:36:28 AM 09/13/17\" symbology=\"Code 128\"/> \r\n    </codes>\r\n  </body>\r\n</gfk_envelope>\r\n";

    // This will work from chrome without security
    //   var xhr = new XMLHttpRequest();
    //   xhr.withCredentials = false;
    //   xhr.addEventListener("readystatechange", function () {
    //     if (this.readyState === 4) {
    //       console.log(this.responseText);
    //     }
    //   });

    //   xhr.open("POST", "http://ecpo-descan.gfk.com/dynaload_extrec.aspx?pageid=clickerload");
    //   xhr.setRequestHeader("content-type", "application/xml");
    //   xhr.setRequestHeader("Accept","text");
    //   xhr.setRequestHeader("Access-Control-Allow-Credentials","true");
    //   xhr.setRequestHeader("cache-control", "no-cache");
    //   xhr.setRequestHeader("postman-token", "28cb47ed-8c64-d954-3ddf-8a3329a15359");
    //   xhr.send(result);
     //console.log(result);
    // console.log(BarCodes);
    // console.log(TimeStamp);
    // console.log(Symbology);
    this.postit(GfkServer)
  }
  // this will send the xml to the ECPO data base using an API -> uncommented way.
  postit(GfkServer) {
    //var GfkServer: any = this.DataService.transferdataServer();
    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
    function doCORSRequest(options, printResult) {
      HttpPost(options, cors_api_url, printResult);
    }
    // Bind event
    (function () {

      // console.log(sessionStorage.getItem("urlConcat"))
      // console.log(sessionStorage.getItem("result"))

      doCORSRequest({
        method: 'POST',
        url: GfkServer + '_extrec.aspx?pageid=clickerload',
        //url: sessionStorage.getItem("urlConcat"),
        data: sessionStorage.getItem("result")
        //   url:"http://ecpo-descan-preprod.gfk.com/dynaload_extrec.aspx?pageid=clickerload",
        //   data: '<?xml version="1.0" encoding="iso-8859-1"?>\
        //   <gfk_envelope> "\
        //    <header sw="CSA_2" sw_ver="3.4.0" scanner_sw="RBBV0147" scanner_os="" os_version="Windows 7 Professional Service Pack 1" loaddll_version="1.0.20.0">\
        //    </header>\
        //    <body>\
        //      <codes deviceid="000000000P602395" device="0">\
        //      <item barcode="Sa9999" timestamp="10:36:26 AM 09/13/17" symbology="Code 128"/>\
        //      </codes>\
        //    </body>\
        //  </gfk_envelope>'
      },
        function printResult(result) {
          console.log(result)
          console.log(result.length)
          if (result.endsWith("s_Extrec_ReceiveXML Code: 1")) {
            ErrorCode1();
          }
          if (result.endsWith("s_Extrec_ReceiveXML Code: 2")) {
            ErrorCode2();
          }
          if (result.length == 14) {

            SuccessFeedback();
          }
        },
      );
    })();
  }
  // login to ECPO portal
  login() {
    var ScannerID: any = this.DataService.transferdata();
    ScannerID = ScannerID.scannerId;
    var GfkServer: any = this.DataService.transferdataServer();

    var Checksum = 0;
    for (var i = 1; i <= ScannerID.length; i++) {
      Checksum = Checksum + (i * (ScannerID.charCodeAt(i - 1)) * (ScannerID.charCodeAt(i - 1)) * (ScannerID.charCodeAt(i - 1)));
    }
    Checksum = Checksum % 1000000;
    var ChecksumStr = "000000".concat(Checksum.toString());
    ChecksumStr = ChecksumStr.slice(ChecksumStr.length - 6);
    var Result = ScannerID + ChecksumStr;
    // console.log("Scanner Login id: ", ScannerID, "\n The CheckSum Result: ", ChecksumStr)
    // console.log(GfkServer);
    // console.log("Checksum:" + ChecksumStr);
    // console.log("Concatenation " + Result);
    // console.log("Your full login served" + " http://ecpo-descan-preprod.gfk.com/dynaLoad.aspx?pageid=clickerlogin&deviceid="+ Result);
    var win = window.open(GfkServer + ".aspx?pageid=clickerlogin&deviceid=" + Result, '_blank');
    win.focus();
  }


  ngOnInit() { }
}

function HttpPost(options: any, cors_api_url: string, printResult: any) {

  var x = new XMLHttpRequest();
  x.open(options.method, cors_api_url + options.url);
  x.onload = x.onerror = function () {
    printResult(x.responseText);
    // printResult(options.method + ' ' + options.url + '\n' +
    //   "status:" + x.status + ' ' + x.statusText + '\n\n' +
    //   (x.responseText || ''));
  };


  if (/^POST/i.test(options.method)) {
    x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  x.send(options.data);
  sessionStorage.removeItem("result")

}

function SuccessFeedback() {
  logSuccess();

}

function ErrorCode2() {
  logBindError();

}

function ErrorCode1() {
  logEmptyTable();
}


var log = "";
var prelog = "Log:" + "<br>";
var print = "";
function logSuccess() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds() + "> BarCodes successfully sent !";

  log = datetime + "<br>" + log;
  print = prelog + log;

  document.getElementById("console").innerHTML = print;
  if (log.length > 250) {
    log = ""
  }
}

function logEmptyTable() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds() + "> Not good, did you just sent an empty data table ?";

  log = datetime + "<br>" + log;
  document.getElementById("console").innerHTML = log;
  if (log.length > 250) {
    log = ""
  }
}

function logBindError() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds() + "> Not good, Is the scanner BINDED with an individual ?";

  log = datetime + "<br>" + log;
  document.getElementById("console").innerHTML = log;
  if (log.length > 250) {
    log = ""
  }
}

function ErrorNoId(ScannerID, GfkServer) {
 
  var alertMsj: string = "";
  var isAlert: boolean = false;
  if (ScannerID == undefined) {
    
    console.log(ScannerID)
    alertMsj += "Please fill in ScannerID \n";
    isAlert = true;
   
  }
  else if (ScannerID.length != 16) {
    console.log(ScannerID.length)
    alertMsj += "Invalid ScannerID \n"
    isAlert = true;
  }
  if (GfkServer == undefined) {
    alertMsj += "Select GFK-Server !";
    isAlert = true;
  }
  if (isAlert) {
    alert(alertMsj);
    isAlert = false;
  }
}
