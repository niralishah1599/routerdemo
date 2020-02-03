import { Component, OnInit, Input } from '@angular/core';
import { Iproducts } from 'src/app/models/products.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/services/productList.services';
import { AddToCartServices } from 'src/app/services/addToCart.services';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: Iproducts[];
  addToCartList: Iproducts;
  productss:string[]=[];
  

  @Input() productDetail: any;
  total_price: number;
  total_stock: number;
  total: number;
  id: number;
  totalCartItem: number;
  searchItem:string="";
  constructor
  (private route: Router, private _ProductListService: ProductListService, 
    private activaRoute: ActivatedRoute, private _AddToCartServices: AddToCartServices,public filterPipe:FilterPipe ) {}
  
  ngOnInit() 
  {
    this.productList = this._ProductListService.productList;
    this.total_price = 0;
    this.total_stock = 0;
    this.total = 0;
    
   

  }


  updateProductStock(product) { }
  
  sumTotal()
  {

    this.total = 0;
    this.productList.map((item) => {
      this.total += (item.price * item.stock);
    })
    return this.total;


  }

  callToAddProduct() 
  {
    this.route.navigate(['/products/add', -1]);
  }
  callToDeleteProduct(deleteId) 
  {
    let item = this.productList.find(item => item.id === deleteId);
    console.log(item);
    this.productList.splice(this.productList.indexOf(item), 1);
    console.log(this.productList);
    this.productList.map((item, index) => {
      return item.id = index + 1;
    });
  }

  callToEditProduct(id)
  {
    this.route.navigate(['/products/add', id])
  }
  callToAddToCard(addToCartId) 
  {
    if (this._AddToCartServices.addToCartServices.find((index => index.id == addToCartId))) 
    {
      alert("Alerady in cart");
    }

    else
     {
      let selObj = Object.assign({}, this._ProductListService.productList.find(item => item.id === addToCartId))
      selObj.quantity = 1
      this._AddToCartServices.addToCartServices.push(selObj)
    }
  }

    callToShowProduct() 
    {
      this.route.navigate(['/products/cart']);
    }

    filterProduct()
    {
    
      if (isNaN(parseInt(this.searchItem))) {
        this.productList = this.filterPipe.transform(this._ProductListService.productList, 'title', this.searchItem)
      } else
       {
        this.productList = this.filterPipe.transform(this._ProductListService.productList,['id','title','price','stock'], this.searchItem);
       }
    }
   
   
}




