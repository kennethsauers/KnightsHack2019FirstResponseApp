import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SideBarService} from '../side-bar-service.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

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
  }
}
