import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import {JwtHelper} from 'angular2-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName;
  constructor(private http:Http) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/api/auth/', credentials).pipe(
      map(response=> {
        let result = response.json();
        //console.log(result);
        if (result && result.token) {
          localStorage.setItem('auth-token', result.token);
          this.userName = this.getCurrentUser().name;
          return true;
        }
        return false;
      })
    )
  }

  logout() {
    localStorage.removeItem('auth-token');
  }

  isLoggedIn() {
      let jHelper = new JwtHelper();
      let token = localStorage.getItem('auth-token');
      
      if (!token)
        return false;

      let expirationDate = jHelper.getTokenExpirationDate(token);
      let isExpired = jHelper.isTokenExpired(token);

      // console.log(`Expiration Date: ${expirationDate}`);
      // console.log(`Is Expired: ${isExpired}`);
      
      return !isExpired;
  }

  getCurrentUser() {

    let token = localStorage.getItem('auth-token');
    let decodedToken = new JwtHelper().decodeToken(token);
    // console.log(decodedToken);
    if (!token)
      return null;
    return decodedToken;
  }


}
