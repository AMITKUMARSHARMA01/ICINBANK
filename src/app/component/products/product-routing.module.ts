import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

// 1. define routes
const routes = [
  { path:'products', component:ProductsComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent},
  { path:'list', component:ListComponent},
  { path:'details', component:DetailsComponent},
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
