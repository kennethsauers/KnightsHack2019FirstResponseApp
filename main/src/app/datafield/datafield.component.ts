import { Component, OnInit } from '@angular/core';
import { Pin } from '../entities';
import { PinService } from '../pin.service'
@Component({
  selector: 'app-datafield',
  templateUrl: './datafield.component.html',
  styleUrls: ['./datafield.component.css']
})

export class DatafieldComponent implements OnInit {

  public pin: Pin;

  constructor(
    private pinService : PinService
  ) {
    if(! this.pin){
    this.pin={}
  }
   }

  ngOnInit() {
  }
  

}
