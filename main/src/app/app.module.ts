import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { SideBarService } from './side-bar-service.service'



import { GeocodeService} from './geocode.service'
import { HttpClientModule } from '@angular/common/http';
import { PinService } from './pin.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatafieldComponent } from './datafield/datafield.component';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    DatafieldComponent,
    RolesComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBA4hXOIT9XPRQUOddHq1TEli1DYyRdOOc"
    }),
    AppRoutingModule,
    HttpClientModule,

    FormsModule

  ],
  providers: [PinService,
              SideBarService,
              GeocodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
