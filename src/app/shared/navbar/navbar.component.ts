import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/ITR/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() btnLoginClick: boolean;
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  }

  loginClick() {
    this.router.navigate(['/ITR/login']);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.userToken = null;
    this.authService.currentUser = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/ITR']);

  }
}
