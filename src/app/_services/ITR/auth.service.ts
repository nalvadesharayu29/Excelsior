import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/_models/User';
import { AuthUser } from 'src/app/_models/authUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;
  currentUser: User;

constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

login(model: any) {
  return this.http.post<AuthUser>(this.baseUrl + 'auth/login', model, {
    headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
  })
  .pipe(
    map((user) => {
      if (user) {
        console.log('Logged in User', user);
        localStorage.setItem('token', user.tokenString);
        localStorage.setItem('userFromRepo', JSON.stringify(user.user));
        this.userToken = user.tokenString;
        this.currentUser = user.user;
        this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
      }
    })
  );
}

register(user: User) {
  return this.http.post(this.baseUrl + 'auth/register', user, {
    headers : new HttpHeaders()
    .set('Content-Type', 'application/json')
  });
}

loggedIn() {
  const token = this.jwtHelperService.tokenGetter();
  if (!token) {
    return false;
  }
  return !this.jwtHelperService.isTokenExpired(token);
}
}
