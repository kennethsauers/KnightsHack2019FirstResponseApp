import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PinService } from './pin.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatafieldComponent } from './datafield/datafield.component';
import { FormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { GeoComponent } from './geo/geo.component'


@NgModule({
  declarations: [
    AppComponent,
    DatafieldComponent,
    RolesComponent,
    GeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
