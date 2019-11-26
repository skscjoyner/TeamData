import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  loginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };
    console.log(user);
    return 
  }

}
