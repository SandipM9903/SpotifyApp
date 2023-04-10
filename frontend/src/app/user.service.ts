import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:65100/api/v1/"
  baseUrl2 = "http://localhost:8085/authservice/" 
  constructor(private httpClient: HttpClient) { }

  addUser(userobj:any)
  {
    return this.httpClient.post(this.baseUrl + "register", userobj);
  }

  loginCheck(userobj:any)
  {
    return this.httpClient.post(this.baseUrl2 + "login", userobj);
  }
}
