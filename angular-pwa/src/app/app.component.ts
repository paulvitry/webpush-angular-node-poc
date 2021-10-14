import { Component } from '@angular/core';
import {SwPush} from '@angular/service-worker'
import  {ApiService } from './api.service'

@Component({
  selector: 'app-root',
  template: `
    <button class="button button-primary" (click)="subscribeToNotifications()">
      Subscribe
    </button>
  `,
})
export class AppComponent {
  readonly VAPID_PUBLIC_KEY = '';


    constructor(
        private swPush: SwPush,
        private ApiService: ApiService
       ) {}

  subscribeToNotifications() {
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then((sub) => this.ApiService.sendToken(sub).subscribe(res => {console.log(res)}))
      .catch((err) =>
        console.error('Could not subscribe to notifications', err)
      );
  }
}
