import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public state:any;
  constructor(private router : Router, private activateRoutes : ActivatedRoute) { }

  ngOnInit(): void {
  
    
  }

}
