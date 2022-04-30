import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OneWayComponent } from './component/data/one-way/one-way.component';
import { TwoWayComponent } from './component/data/two-way/two-way.component';
import { CssBindingComponent } from './component/data/css-binding/css-binding.component';
import { EventBindingComponent } from './component/data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsModule } from './component/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { UserService } from './service/user.service';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    NavbarComponent,
    OneWayComponent,
    TwoWayComponent,
    CssBindingComponent,
    EventBindingComponent,
    NotFoundComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
