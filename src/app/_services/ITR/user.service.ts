import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) { }

saveuserDetails(userDetails) {
  this.http.post(this.baseUrl + 'user/saveDetails', userDetails, {
    headers : new HttpHeaders()
      .set('Content-Type', 'application/json')
  });
}
}
