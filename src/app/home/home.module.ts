import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes= [
  {
    path: 'homes',
    component:HomeComponent
  },
];
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
