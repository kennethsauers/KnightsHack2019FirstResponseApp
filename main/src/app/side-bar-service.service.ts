import { Injectable, Output, EventEmitter } from '@angular/core';
import {Pin, Location} from './entities';
import {PinService} from './pin.service';

@Injectable()
export class SideBarService {
  public pins: Pin[];
  public role: number;

  @Output() change: EventEmitter<Location> = new EventEmitter();
  @Output() roleChange: EventEmitter<number> = new EventEmitter();

  constructor (private pinService: PinService) { }

  hello() {
    this.pinService.getRolePins(this.role).subscribe(pins => {
      this.pins = pins;
    });
  }

  fuck(loca){
    this.change.emit(loca);
  }

  roleSideBar(role){
    this.role = role;
    this.roleChange.emit(role);
  }

  clearPins() {
    this.pinService.clearPins().subscribe(ret => {
      if (!ret.success)
        console.log("something didn't work");
    });
  }
}
