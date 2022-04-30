import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-binding',
  templateUrl: './css-binding.component.html',
  styleUrls: ['./css-binding.component.css']
})
export class CssBindingComponent implements OnInit {

  // data 

  public username: string =" john smith";
  public age:number =30;
  public message:string =" today is a good day!";
  public isMarried:boolean = false;

  public colors = {
    RED: 'red',
    BlUE: 'blue',
    GREEN: 'green'
  }

  public product: Product = {

    id:343454,
    name:"apple macbook xyz series",
    price:546456.789,
    status:true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

interface Product {
  id:number;
  name:string;
  price:number;
  status:boolean;
}