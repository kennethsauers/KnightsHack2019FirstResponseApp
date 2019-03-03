import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeocodeService } from '../geocode.service'
import { SideBarService } from '../side-bar-service.service'
import { PinService } from '../pin.service';

import { Location, Pin } from '../entities'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private pins: Pin[];
  private loc = new Location();
  private role: number;

  locationChosen = false;

  onChoseLocation(event){
    console.log(event)
    //this.latitude = event.coords.lat;
    //this.longitude = event.coords.lng;
    this.loc.lat = event.coords.lat;
    this.loc.long = event.coords.lng;
    this.locationChosen = true;
  }

  constructor (
      private geocodeService: GeocodeService,
      private sideBarService: SideBarService,
      private pinService: PinService) { }

  ngOnInit() {
    this.showLocation();
    this.sideBarService.roleChange.subscribe(role => {
      this.pinService.getRolePins(role || 0).subscribe(pins => {
        this.pins = pins;
      });
    });
  }

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.geocodeService.geocodeAddress(this.loc.address)
    .subscribe((location: Location) => {
        this.loc = location;
        this.sideBarService.fuck(location);
      }
    );
  }
}
