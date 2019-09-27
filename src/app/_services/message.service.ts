import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

sendMessage(msg) {
  return this.http.post(this.baseUrl + 'contact/message', msg);
}
}
