import { Component, OnInit } from '@angular/core';
import {Iproducts} from 'src/app/models/products.model';
import {AddToCartServices} from 'src/app/services/addToCart.services';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  constructor(private router:Router,private _addToCartServices:AddToCartServices,public _activatedRouter:ActivatedRoute) { }
  
  addToCartList:Iproducts[];
  addcart:Iproducts;
  totalPrice:number;
  total:number;
  quantity:number;

  ngOnInit() 
  {
  this.addToCartList=this._addToCartServices.addToCartServices;
  }

  callToDeleteProduct(cartId)
  {
    let item=this.addToCartList.find((item => item.id == cartId));
    this.addToCartList.splice(this.addToCartList.indexOf(item),1);
  }
  redirectToProductList()
  {
    this.router.navigateByUrl('/products/productlist');
  }
 

    sumTotal()
    {
      this.total=0;
      this._addToCartServices.addToCartServices.map((item) => 
            {
                 this.total += item.price * item.quantity;
            
            });
        return this.total;
            
    }
    totalQuantity()
    {
    this.quantity=0;
    this._addToCartServices.addToCartServices.map((item) => 
    {
         this.quantity += item.quantity;
    
    });
    return this.quantity;
    }
      
}

