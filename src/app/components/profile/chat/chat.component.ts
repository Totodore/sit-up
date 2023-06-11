import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { ApiService } from 'src/app/services/api.service';
import { SseService } from 'src/app/services/sse.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public latestMessages: Message[] = [];
  constructor(
    private readonly _api: ApiService
  ) { }

  public async ngOnInit() {
    this.latestMessages = await this._api.get("message/latest");
  }


}
