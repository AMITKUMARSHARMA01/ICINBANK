import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { DataService } from 'src/app/service/data.service';






@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    DetailsComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  providers:[ProductService]
})
export class ProductsModule { }
