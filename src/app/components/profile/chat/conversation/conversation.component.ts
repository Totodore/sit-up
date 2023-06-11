import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { SseService } from 'src/app/services/sse.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {


  @Input()
  public otherPerson?: User;

  public messages: Message[] = [];

  public messageContent = "";

  constructor(
    private readonly _api: ApiService,
    private readonly _sse: SseService
  ) { }
  
  public async ngOnInit() {
    this.messages = await this._api.get(`message/conversation/${this.otherPerson?.id}`);
    this._sse.getSse("message/subscribe", this._api.jwt!).subscribe(data => {
      console.log(data);
    });
  }

  public async sendMessage() {
    const message: Message = await this._api.post("message", {
      message: this.messageContent,
      receiverId: this.otherPerson?.id
    });
    this.messageContent = "";
    this.messages.push(message);
  }
}
