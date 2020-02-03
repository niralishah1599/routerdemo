import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { ProductListComponent } from './product-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import  { DirectivesModule } from 'src/app/directives/directives.module';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import {HttpClientModule} from '@angular/common/http'
const routes: Routes =
[

  {
    path:'',
    redirectTo:'./home',
    pathMatch:'full'
  },
  {
    path:'productlist',
    component:ProductListComponent
  },
  
  {
    path:'add',
    component:AddProductComponent
  },
  {
    path:'add/:id',
    component:AddProductComponent
  },
  {
    path:'delete',
    component:DeleteProductComponent
  },
  {
    path:'stock',
    component:StockUpdateComponent
  },
  {
    path:'cart',
    component:AddToCartComponent
  }
  

]
@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    DeleteProductComponent,
    StockUpdateComponent,
    AddToCartComponent,
    FilterPipe
  
  ],
  imports: [
    ReactiveFormsModule,  
    CommonModule,
    FormsModule,
    DirectivesModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductListRoutingModule { }
