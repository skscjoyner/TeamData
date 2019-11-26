import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  teamName: string;
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  registerSubmit() {
    const regUser = {
      name: this.name,
      teamName: this.teamName,
      email: this.email,
      password: this.password
    };
    console.log(regUser);
  }
}
