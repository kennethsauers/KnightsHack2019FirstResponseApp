import { Component, OnInit, HostBinding } from '@angular/core';
import { Pin, Location, Contact } from '../entities';
import { PinService } from '../pin.service'
import { SideBarService } from '../side-bar-service.service'


@Component({
  selector: 'app-datafield',
  templateUrl: './datafield.component.html',
  styleUrls: ['./datafield.component.css']
})

export class DatafieldComponent implements OnInit {

  @HostBinding('class.loc')
  public pin: Pin;

  constructor(private pinService : PinService,
              private sideBarService: SideBarService) {   }

  ngOnInit() {
    if(!this.pin) {
      this.pin = new Pin();
      this.pin.location = new Location();
      this.pin.contact = new Contact();
    }
    this.sideBarService.change.subscribe(loc => {
      this.pin.location = loc;
    });
    this.pin.priority = 1;
    this.pin.type_of = 1;
    }

  onPinCreate() {
    this.pinService.createPin(this.pin).subscribe((data) => {
      if (data.success) {
        console.log("Created!");
      } else {
        console.log("not created " + data.msg);
      }
    });
  }
}
