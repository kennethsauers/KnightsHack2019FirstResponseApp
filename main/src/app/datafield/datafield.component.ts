import { Component, OnInit, HostBinding } from '@angular/core';
import { Pin, Location, Contact } from '../entities';
import { PinService } from '../pin.service'
import { SideBarService } from '../side-bar-service.service'
import { Observable } from 'rxjs/Observable';
import { GeocodeService} from '../geocode.service';



@Component({
  selector: 'app-datafield',
  templateUrl: './datafield.component.html',
  styleUrls: ['./datafield.component.css']
})

export class DatafieldComponent implements OnInit {

  @HostBinding('class.loc')
  @HostBinding('class.roles')
  public pin: Pin;
  public role : number;
  public address : string;

   getPosition(){

    navigator.geolocation.watchPosition((pos: Position) => {
      this.pin.location.lat =  pos.coords.latitude;
      this.pin.location.long = pos.coords.longitude;

    })
    this.geocodeService.getAddressFromCoordinates(this.pin.location, addy => {
      console.log(addy);
      this.pin.location.address = addy;
    });
    


}

  constructor(private pinService : PinService,
              private sideBarService: SideBarService,
              private geocodeService: GeocodeService) {   }

  ngOnInit() {
    if(!this.pin) {
      this.pin = new Pin();
      this.pin.location = new Location();
      this.pin.contact = new Contact();
    }
    this.sideBarService.change.subscribe(loc => {
      this.pin.location = loc;
    });
    this.sideBarService.roleChange.subscribe(role => {
      this.role = role;
    })
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
