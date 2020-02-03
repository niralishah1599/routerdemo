import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'signup', component:SignUpFormComponent},
  { path:'signin',component:SignInFormComponent},
  
  
    
];

@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  
  ],
  exports:[
    RouterModule,
    FormsModule
  ]
 
})
export class SigninSignupFormModule { }
