import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Declarar funciones de plugins js externos
declare function init_plugins(); //assets/js/custom.js

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar(){
    this.router.navigate(['/dashboard']);
  }
}
