import { Injectable } from '@angular/core';
import {Iproducts} from 'src/app/models/products.model';

@Injectable({
    providedIn: 'root'
})
export class  AddToCartServices
{
    totalPrice:number;
    public addToCartServices:Iproducts[]=
    [
        
    ]

    totalprice()
    {
      this.totalPrice=0;
      this.addToCartServices.map((item) => 
      {
                 this.totalPrice += item.price;
            
      });
          return this.totalPrice; 
    }
}   
