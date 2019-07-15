import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.css']
})
export class IncomeTaxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginClick() {
    this.router.navigate(['/ITR/login']);
  }
}
