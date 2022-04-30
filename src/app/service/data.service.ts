import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";



@Injectable()
export class DataService {

    public products:Product[] = [

        {
            id:100,
            name:"pizza",
            description:" it is fastfood",
            price:45456.34
        },

        {
            id:101,
            name:"burger",
            description:" it is fastfood",
            price:67456.34
        },

        {
            id:102,
            name:"pasta",
            description:" it is fastfood",
            price:3456.34
        },

        {
            id:103,
            name:"manchurian",
            description:" it is fastfood",
            price:11336.34
        }
    ];
}