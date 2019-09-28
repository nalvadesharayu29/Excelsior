import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../_services/message.service';
import { AlertifyService } from '../_services/shared/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private msgService: MessageService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.msgService.sendMessage(this.model).subscribe(
    data => {
  this.alertify.success('Thank you. We will contact you soon.');
  this.model = {};
}
    );
  }
}
