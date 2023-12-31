import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  public token:any
  constructor(private http: HttpClient , private router:Router) {
      this.currentUserSubject = new BehaviorSubject<any>(sessionStorage.getItem('currentUser'));
      this.currentUser = this.currentUserSubject.asObservable();                
  }

  public get currentUserValue(): User {
      //return this.currentUserSubject.value;
      return JSON.parse(sessionStorage.getItem("currentUser") || '{}');
  }

  login(data:any) {
      return this.http.post<User>(`${environment.baseUrl}Auth`, data)
          .pipe(map((user:any) => {
              if(user.isAuthnticated == true){
                  this.token = user.token;
                  sessionStorage.setItem('xToken' , user.token);
                  var decoded = jwt_decode(this.token);
                  // store user details and jwt token in session storage to keep user logged in between page refreshes
                  sessionStorage.setItem('currentUser', JSON.stringify(decoded));
                  this.currentUserSubject.next(decoded);
                  sessionStorage.setItem('userID', data.username)
                  
              }
                  return user;
      }));

      
  }

  logout() {
      // remove user from session storage to log user out
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      location.href="";
      sessionStorage.removeItem('xToken');
      sessionStorage.removeItem('userType');
      sessionStorage.removeItem('userID');
  }

}
