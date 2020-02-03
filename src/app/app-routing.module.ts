import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninSignupFormModule } from './authentication/signin-signup-form/signin-signup-form.module';
import { ProductListComponent } from './product-master/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes =
  [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'signinsignup',
      loadChildren: () => import('./authentication/signin-signup-form/signin-signup-form.module').then(m => m.SigninSignupFormModule)
    },
    {
      path: 'products',
      loadChildren: () => import('./product-master/product-list/product-list-routing.module').then(p => p.ProductListRoutingModule)
    }


  ];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

