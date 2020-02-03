import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Iusers } from 'src/app/models/users.model';
import { Router } from '@angular/router';
import { UsersService} from 'src/app/services/users.services'
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})

export class SignUpFormComponent implements OnInit {

  registerUser:Iusers[]=[];
  newUser:Iusers;
  confirmPass:string;
  password:string;
  errorMsg:string="";
  temp:boolean;
  constructor(private fb: FormBuilder,private router: Router,private _usersService:UsersService ) { }

  get Email()
  {
    return this.registrationForm.get('email');
  }  
  get Password()
  {
    return this.registrationForm.get('password');
  }

  registrationForm = this.fb.group({
    email: ["", [Validators.required,Validators.pattern("^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-z]+$")]],
    password: ["", Validators.required],
    
  });

  
  ngOnInit() {
    this.registerUser=this._usersService.usersList; 

  }
  

  onSubmit()
  {
    console.log(this.temp);
  if(this.temp)
  {
    
  this.newUser=this.registrationForm.value;
  this.registerUser.push(this.newUser);
  console.log(this.registerUser);
  console.log(this._usersService.usersList);
  this.router.navigateByUrl('/signinsignup/signin');
  }
  }

  onKey(event)
  {
   
   if(event.target.value==this.Password.value)
   {
     this.errorMsg="";
     this.temp=true;
      return this.temp;
   }
   else
   {
     this.errorMsg="mismatch";
     this.temp=false;
     return this.temp;
   }
  
  
  }  
}
