import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeocodeService} from '../geocode.service'
import { SideBarService} from '../side-bar-service.service'

import {Location} from '../entities'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  loc : Location = {lat : 66.666,
                    long : 33.333,
                    address: " "}

  locationChosen = false;

  onChoseLocation(event){
    console.log(event)
    //this.latitude = event.coords.lat;
    //this.longitude = event.coords.lng;
    this.locationChosen = true;
  }


  constructor(
      private geocodeService: GeocodeService,
      private sideBarService: SideBarService
    ) {}
  ngOnInit() {
    this.showLocation();
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
