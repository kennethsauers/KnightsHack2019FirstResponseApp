import { Injectable, Output, EventEmitter } from '@angular/core';
import {Location} from './entities';

@Injectable()
export class SideBarService {


  @Output() change: EventEmitter<Location> = new EventEmitter();


  fuck(loca){
    console.log(loca);
    this.change.emit(loca);
  }

}
