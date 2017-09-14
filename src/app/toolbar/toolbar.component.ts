import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  DunamisUrlPages = [
    {value: 'steak-0', viewValue: 'clickerload'},
    {value: 'pizza-1', viewValue: 'clickerlogin'}
   
  ];
  GFK_Server = [
    {value: 'AT-PREPROD-0', viewValue: 'ECPO-AT-PREPROD'},
    {value: 'AT-PROD-1', viewValue: 'ECPO-AT-PROD'},
    {value: 'AT-PREPROD-2', viewValue: 'ECPO-AT-PREPROD'},
    {value: 'BE-PROD-3', viewValue: 'ECPO-BE-PROD'},
    {value: 'DEFASHION-PREPROD-4', viewValue: 'ECPO-DEFASHION-PREPROD'},
    {value: 'DEFASHION-PROD-5', viewValue: 'ECPO-DEFASHION-PROD'},
    {value: 'DESCAN-PREPROD-6', viewValue: 'ECPO-DESCAN-PREPROD'},
    {value: 'DESCAN-PROD-7', viewValue: 'ECPO-DESCAN-PROD'},
    {value: 'DESCAN-PREPROD-8', viewValue: 'ECPO-DESCAN-PREPROD'},
    {value: 'DESCAN-PROD-9', viewValue: 'ECPO-DESCAN-PROD'},
    {value: 'DESCOPE-PREPROD-10', viewValue: 'ECPO-DESCOPE-PREPROD'},
    {value: 'DESCOPE-PROD-11', viewValue: 'ECPO-DESCOPE-PROD'},
    {value: 'FR-PREPROD-12' ,viewValue: 'ECPO-FR-PREPROD'},
    {value: 'FR-PROD-13', viewValue: 'ECPO-FR-PROD'},
    {value: 'NL-PREPROD-14', viewValue: 'ECPO-NL-PREPROD'},
    {value: 'NL-PROD-15', viewValue: 'ECPO-NL-PROD'},
    {value: 'RS-PREPROD-16', viewValue: 'ECPO-RS-PREPROD'},
    {value: 'RS-PROD-17', viewValue: 'ECPO-RS-PROD'},
    {value: 'SE-PREPROD-18', viewValue: 'ECPO-SE-PREPROD'},
  ];
  DunamisUrl = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
