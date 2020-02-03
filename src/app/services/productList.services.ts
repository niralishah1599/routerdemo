import { Injectable } from '@angular/core';
import {Iproducts} from 'src/app/models/products.model';

@Injectable({
    providedIn: 'root'
})
export class  ProductListService
{
    total_price:number;
    total_stock :number;
    public productList:Iproducts[]=
    [
        
          {
            'id':1,
            'title':"Sunsilk",
            'price':100,
            'stock':20
          },
          {
            'id':2,
            'title':"ClinicPLus",
            'price':200,
            'stock':30
            
      
          },
          {
            'id':3,
            'title':"Head&Shoulder",
            'price':300,
            'stock':10
            
      
          },
          {
            'id':4,
            'title':"Panteene",
            'price':400,
            'stock':10
            
      
          },
          {
            'id':5,
            'title':"Garnier",
            'price':500,
            'stock':30    
      
          },
          {
            'id':6,
            'title':"Dove",
            'price':210,
            'stock':40
            
      
          },
          {
            'id':7,
            'title':"Herbal",
            'price':220,
            'stock':20
            
      
          },
          {
            'id':8,
            'title':"Tresseme",
            'price':320,
            'stock':10
            
      
          },
          {
            'id':9,
            'title':"Lorial",
            'price':400,
            'stock':15
            
      
          }
        
    ]
    
    totalprice()
  {
    this.total_price = 0;
    this.productList.map((item) => {
      this.total_price += item.price;
    })
    return this.total_price;
  }
  totalStock() 
  {
    this.total_stock = 0;

    this.productList.map((item) => {
      this.total_stock += item.stock;
    })
    return this.total_stock;
  }
  
 

}
