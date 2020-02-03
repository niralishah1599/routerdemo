import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  

  ngOnInit() {
  }
 redirectToSignUp()
  {
    this.router.navigateByUrl('/signinsignup/signup');
  }
  redirectToSignIn()
  {
    this.router.navigateByUrl('/signinsignup/signin');
  }
}
