import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public role : number = 1;
/*
  public messageClasses = {
    "button_Admin" : (this.role == 0),
    "button_Civilan" : (this.role == 1),
    "button_Medical" : (this.role == 2),
    "button_FireFighter" : (this.role == 3),
    "button_DisasterRelief" : (this.role == 4),
    "button_Infrastructure" : (this.role == 5)

  }
*/


  constructor() { }
  ngOnInit() {
  }

  roleToString(num : number){
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
}
