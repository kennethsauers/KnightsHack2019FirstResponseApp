import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datafield',
  templateUrl: './datafield.component.html',
  styleUrls: ['./datafield.component.css']
})

export class DatafieldComponent implements OnInit {

  public role = "police";



  public Subject: string = "initial value";
  public Category: string = "initial value";
  public Priority: string = "initial value";
  public Location: string = "initial value";
  public Name: string = "initial value";
  public Phone: string = "initial value";
  public Comment: string = "initial value";



  constructor() { }

  ngOnInit() {
  }

}
