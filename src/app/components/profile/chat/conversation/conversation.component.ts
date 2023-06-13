import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class ConversationComponent implements OnInit, OnDestroy {


  @Input()
  public otherPerson?: User;

  public messages: Message[] = [];

  public messageContent = "";
  private sseSubscription: Subscription | undefined;

  constructor(
    private readonly _api: ApiService,
    private readonly _sse: SseService
  ) { }

  public ngOnDestroy(): void {
    this.sseSubscription?.unsubscribe();
  }
  
  public async ngOnInit() {
    this.messages = await this._api.get(`message/conversation/${this.otherPerson?.id}`);
    this.sseSubscription = this._sse.getSse("message/subscribe", this._api.jwt!).subscribe(e => {
      const message: Message = JSON.parse(e.data);
      this.messages.push(message);
    });
  }

  public async sendMessage() {
    await this._api.post("message", {
      message: this.messageContent,
      receiverId: this.otherPerson?.id
    });
    this.messageContent = "";
  }
}
