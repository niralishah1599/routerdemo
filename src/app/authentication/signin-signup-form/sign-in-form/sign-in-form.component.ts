import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Iusers } from 'src/app/models/users.model';
import { Router } from '@angular/router';
import {ProductListService} from 'src/app/services/productList.services';
import {UsersService} from 'src/app/services/users.services'
import { from } from 'rxjs';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  
  user:Iusers[]=[];
  users:Iusers;
  
  constructor(private fb:FormBuilder,private router: Router,private _usersService:UsersService) { }
  LoginForm=this.fb.group({
    email: ["", [Validators.required,Validators.pattern("^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-z]+$")]],
    password: ["", Validators.required],
  })

  ngOnInit() {
  this.router
  }
  onSubmit()
  {
    console.log("submit");
    console.log(this.LoginForm.value.email);
    console.log(this.LoginForm.value.password);
   this._usersService.usersList.filter(item => {
     if(item.email == this.LoginForm.value.email && item.password == this.LoginForm.value.password )
     {
      this.router.navigateByUrl('/products/productlist');
     }
     else
     {
       this.router.navigateByUrl('/signinsignup/signup')
     }
   })
    
  
  }
}
