import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';


import { HomeComponent } from './component/home/home.component';


import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { ProductRoutingModule } from './component/products/product-routing.module';
import { RegisterComponent } from './component/register/register.component';


//1.define routes
const routes: Routes = [

  {path :'', redirectTo:'/home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  
    {path: 'products', loadChildren: ()=> import('./component/products/product-routing.module').then(m=>m.ProductRoutingModule)},
    
    { path:'**', component:NotFoundComponent},
];

// 2.register routes
@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
