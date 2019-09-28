import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-divyanka-fabrics',
  templateUrl: './divyanka-fabrics.component.html',
  styleUrls: ['./divyanka-fabrics.component.css']
})
export class DivyankaFabricsComponent implements OnInit {
model: any =  {};

  constructor(private msgService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.msgService.sendMessage(this.model).subscribe();
  }

}
