import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public products:any;
  router: any;
  // inject data service to load data
 
 constructor(private productSrv : ProductService) {

 }
  
  

  ngOnInit(): void {

       this.productSrv.getProducts().subscribe((data: any)=>{
      console.log(data);
    }, error=>{
       console.log(error);
    })
  }

  public getProducts() {
    this.productSrv.getProducts().subscribe(data=>{
      console.log(data);
      this.products = data;
    });
  }


  onDelete(id:string) {
    console.log("Delete trigger "+id);
    this.productSrv.deleteProduct(id).subscribe(res=>{
      console.log("Product is delete sucessfully !");
      this.getProducts();
    });
  }

  onEdit(product:any) {
    // console.log("update trigger ", product);
    this.router.navigateByUrl('/products/update', {state: product});
  }
}




