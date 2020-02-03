import { Component, OnInit,Input} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
import { Iproducts } from 'src/app/models/products.model';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductListService} from 'src/app/services/productList.services';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  product:Iproducts;

  constructor(private fb: FormBuilder,private route:Router,private _ProductListService:ProductListService ,private activatedRoute:ActivatedRoute) { 

  }

  id: number;
  paramId: number;

  addProductForm = this.fb.group({
    title: ["", Validators.required],
    price: [, [Validators.required, Validators.min(1)]],
    stock: [, [Validators.required, Validators.min(1)]]
  });
  ngOnInit() {
     this.activatedRoute.paramMap.subscribe(
       params => {
         this.paramId = parseInt(params.get('id'));
       }
     )

    if (this.paramId != -1) {
      this.product = this._ProductListService.productList.find(item => item.id === this.paramId)
      this.addProductForm.patchValue ({
        title: this.product.title,
        stock: this.product.stock,
        price: this.product.price
      })
    }

  }
  onSubmit() {

    if (this.paramId == -1) {
      this.id = this._ProductListService.productList.length + 1;
    } else {
      this.id = this.paramId;
    }
   
     this.product= 
     {
      id: this.id,
      title:this.addProductForm.controls['title'].value,
      price:this.addProductForm.controls['price'].value,
      stock:this.addProductForm.controls['stock'].value
     }

     if (this.paramId == -1) {
      this._ProductListService.productList.push(this.product);
     } else {
       this._ProductListService.productList.splice(this._ProductListService.productList.findIndex(item => item.id === this.paramId), 1, this.product)
     }

     this.route.navigateByUrl('/products/productlist')
    
}
}
