import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  loggedIn() {
    this.loadToken();
    const helper = new JwtHelperService();
    return !helper.isTokenExpired(this.authToken); //False if Token is good, True if not good
  }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('users/register', user, { headers: headers })
      .pipe(map((res: Response) => res));
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('users/authenticate', user, {
        headers: headers,
      })
      .pipe(map((res: Response) => res));
  }

  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken,
    });
    return this.http.get('users/profile', {
      headers: headers,
    });
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
