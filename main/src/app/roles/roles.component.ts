import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideBarService} from '../side-bar-service.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  private admined: boolean = false;
  public role : number = 1;

  constructor(private sideBarService: SideBarService) {}

  ngOnInit() {}

  getRole(): number {
    return this.role;
  }

  roleToString(num : number) {
    if(num == 0){
      return "Admin"
    }
    if(num == 1){
      return "Civilan"
    }
    if(num == 2){
      return "Medical"
    }
    if(num == 3){
      return "Fire Fighter"
    }
    if(num == 4){
      return "Disaster Relief"
    }
    if(num == 5){
      return "Infrastructure"
    }
    return "null"
  }

  sendRoles(num) {
    this.role = num;
    this.sideBarService.roleSideBar(this.role);
    // we were admin already and we click it again, clear
    if (this.admined) {
      this.sideBarService.clearPins();
      this.admined = false;
    } else
      this.admined = (this.role == num && num == 0) && !this.admined;
  }
}
