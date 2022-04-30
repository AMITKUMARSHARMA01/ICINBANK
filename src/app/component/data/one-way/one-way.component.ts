import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  // data property
  public title:string = "apple macbook xyz series";
  public desc:string = 'this is a laptop';
  public price:number =789735.434;
  public isActive:boolean = false;
  public customer = {
    id:23423453,
    name:'john smith',
    age:30
  }
  constructor() { }

  ngOnInit(): void {
  }

}
