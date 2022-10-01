import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, mergeMap } from 'rxjs';
import { Message } from './api/models/message';
import { HomeService } from './api/services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'setok-client-angular';
  messages: Message[] = new Array<Message>();
  messageControl = new FormControl('');
  messageAdded: string = '';

  constructor(private homeService: HomeService) {
    this.homeService.homeGet$Json().subscribe(data => {
      this.messages = data;
    });
  }

  submit() {
    const message: {message?: string} = {message : this.messageControl.value as string};

    this.homeService.homePost$Json(message)
    .pipe(mergeMap(() => this.homeService.homeGet$Json()))
    .subscribe(res => this.messages = res);
  }
}
