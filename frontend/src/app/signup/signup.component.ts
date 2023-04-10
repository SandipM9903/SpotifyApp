import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService : UserService, private router:Router) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    "userName" : new FormControl(''),
    "password" : new FormControl('')
  });

  addUser()
  {
    this.userService.addUser(this.userForm.value).subscribe(
      response => {
        alert("User Registered");
        this.router.navigate(['login']);
        this.userForm.reset();
      }
    )
  }
}
