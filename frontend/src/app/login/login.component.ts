import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SongService } from '../song.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private songService : SongService, private router :Router,private authService : AuthService) { }

  ngOnInit(): void {
  }

  userName='';

  userForm = new FormGroup({
    "userName" : new FormControl(''),
    "password" : new FormControl('')
  });

  responseData : any;
  loginCheck()
  {
    this.userService.loginCheck(this.userForm.value).subscribe(
      response => {
        // console.log(response);
        this.responseData = response;
        console.log(this.responseData.token);
        this.songService.userName = this.userForm.value.userName;
        //Store Token in browser storage
        localStorage.setItem('jwt',this.responseData.token);
        this.router.navigate(['home'])
        alert("User Logged In");
        this.authService.isUserLoggedIn = true;
        return this.userForm.value.userName;
      }
    )
  }
}
