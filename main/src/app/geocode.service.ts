import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { filter, catchError, tap, map, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Location } from './entities';
declare var google: any;

@Injectable()
export class GeocodeService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  private initGeocoder() {
    this.geocoder = new google.maps.Geocoder();
    this.getAddressFromCoordinates("here");
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
      return fromPromise(this.mapLoader.load())
      .pipe(
        tap(() => this.initGeocoder()),
        map(() => true)
      );
    }
    return of(true);
  }

  geocodeAddress(location: string): Observable<Location> {
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({'address': location}, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              observer.next({
                lat: results[0].geometry.location.lat(),
                long: results[0].geometry.location.lng(),
                address: location
              });
            } else {
                console.log('Error - ', results, ' & Status - ', status);
                observer.next({ lat: 0, long: 0, address: " " });
            }
            observer.complete();
          });
        })
      })
    )
  }

  getAddressFromCoordinates(coordinates) {
    //var latlng = {lat:coordinates.lat(),lng:coordinates.lng()}
    var latlng = {lat:28.6024,lng:-81.2001}
    var retAddress = null;
    this.geocoder.geocode({"location":latlng}, function(results, status) {
        if (status === 'OK') {
            if (results[0]) {
                retAddress = results[0].formatted_address; // Save this field into DB
                //return retAddress;
                console.log(retAddress);
              } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });

}

}
