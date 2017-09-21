import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data: string;
  serverdata: string;

  reciveData(scannerId) {
    this.data = scannerId;
  }
  reciveDataServers(Server) {
    this.serverdata = Server;
  }
  transferdata() {
    return this.data;
  }
  transferdataServer() {
    return this.serverdata;
  }

}
