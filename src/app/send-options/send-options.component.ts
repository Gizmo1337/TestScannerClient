import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-send-options',
  templateUrl: './send-options.component.html',
  styleUrls: ['./send-options.component.css']
})
export class SendOptionsComponent implements OnInit {
  DunamisUrlPages = [
    { value: 'clickerload', viewValue: 'Send BarCodes' },
    { value: 'clickerlogin', viewValue: 'Login to platformx' }

  ];
  GFK_Server = [
    { value: 'http://ecpo-at-preprod.gfk.com/dynaload', viewValue: 'ECPO-AT-PREPROD' },
    { value: 'http://ecpo-at.gfk.com/dynaload', viewValue: 'ECPO-AT-PROD' },
    { value: 'http://ecpo-be-preprod.gfk.com/dynaload', viewValue: 'ECPO-BE-PREPROD' },
    { value: 'http://ecpo-be.gfk.com/dynaload', viewValue: 'ECPO-BE-PROD' },
    { value: 'http://ecpo-defashion-preprod.gfk.com/dynaload', viewValue: 'ECPO-DEFASHION-PREPROD' },
    { value: 'http://ecpo-defashion.gfk.com/dynaload', viewValue: 'ECPO-DEFASHION-PROD' },
    { value: 'http://ecpo-descan-preprod.gfk.com/dynaload', viewValue: 'ECPO-DESCAN-PREPROD' },
    { value: 'http://ecpo-descan.gfk.com/dynaload', viewValue: 'ECPO-DESCAN-PROD' },
    { value: 'http://ecpo-descope-preprod.gfk.com/dynaload', viewValue: 'ECPO-DESCOPE-PREPROD' },
    { value: 'http://ecpo-descope.gfk.com/dynaload', viewValue: 'ECPO-DESCOPE-PROD' },
    { value: 'http://ecpo-fr-preprod.gfk.com/dynaload', viewValue: 'ECPO-FR-PREPROD' },
    { value: 'http://ecpo-fr.gfk.com/dynaload', viewValue: 'ECPO-FR-PROD' },
    { value: 'http://ecpo-nl-preprod.gfk.com/dynaload', viewValue: 'ECPO-NL-PREPROD' },
    { value: 'http://ecpo-nl.gfk.com/dynaload', viewValue: 'ECPO-NL-PROD' },
    { value: 'http://ecpo-rs-preprod.gfk.com/dynaload', viewValue: 'ECPO-RS-PREPROD' },
    { value: 'http://ecpo-rs.gfk.com/dynaload', viewValue: 'ECPO-RS-PROD' },
    { value: 'http://ecpo-se-preprod.gfk.com/dynaload', viewValue: 'ECPO-SE-PREPROD' },
  ];


  oninput(f: NgForm) {
    console.log("Current ScanneriD:", f.value);
    //console.log(f.valid);  // false
    this.DataService.reciveData(f.value);


  }

  onSubmit(e) {
    //console.log("works");  // { first: '', last: '' }
    console.log("Current GFK-Server:", e);
    this.DataService.reciveDataServers(e);
    //console.log(this.DataService.reciveDataServers(e));

    // console.log(f2.valid);  // false
    // this.DataService.reciveData(f2.value);
    // console.log( this.DataService.reciveDataServers(f2.value));
  }

  //scannerid:string = form.value.scannerId 


  constructor(private DataService: DataService) { }

  ngOnInit() {

  }

  selectedValue: string = "clickerload";


}
