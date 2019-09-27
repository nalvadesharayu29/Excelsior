import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private msgService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.msgService.sendMessage(this.model).subscribe();
  }
}
