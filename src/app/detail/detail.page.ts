import { Component, OnInit } from '@angular/core';
import {ServicedataService} from "../../services/servicedata.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  dataUser: any;

  constructor(public servicedata: ServicedataService) {

    this.dataUser = this.servicedata.getData();
    console.log('datos' + JSON.stringify(this.dataUser))
  }

  ngOnInit() {
  }

}
