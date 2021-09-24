import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/tabs/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/tabs/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/tabs/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/tabs/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/tabs/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/tabsfolder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
