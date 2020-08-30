import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {AuthenticationService} from './../../services/authentication.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin = false;
  messages: Message[] = [];

  constructor(private authServ:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
     'username': new FormControl(null, [Validators.required]), 
     'password': new FormControl(null, [Validators.required])
    })
  }

  login(){
    if(this.authServ.authenticate(this.loginForm.value.username, this.loginForm.value.password)){
      this.router.navigate(['/characters'])
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
      this.messages = [];
      this.messages.push({severity:'error', summary:'Login error', detail:'Username and password not valid'});
      console.log(this.messages)
  }
  

}
