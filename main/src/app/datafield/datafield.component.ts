import { Component, OnInit } from '@angular/core';
import { Pin, Location, Contact } from '../entities';
import { PinService } from '../pin.service'

@Component({
  selector: 'app-datafield',
  templateUrl: './datafield.component.html',
  styleUrls: ['./datafield.component.css']
})

export class DatafieldComponent implements OnInit {

  public pin: Pin;

  constructor(private pinService : PinService) {   }

  ngOnInit() {
    if(!this.pin) {
      this.pin = new Pin();
      this.pin.location = new Location();
      this.pin.contact = new Contact();
    }
  }

  onPinCreate() {
  }
}
