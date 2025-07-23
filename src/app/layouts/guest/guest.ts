import {Component, signal} from '@angular/core';
import {Footer} from './partials/footer/footer';
import {Header} from './partials/header/header';

@Component({
  selector: 'app-guest',
  imports: [
    Footer,
    Header
  ],
  templateUrl: './guest.html',
  styleUrl: './guest.css'
})
export class Guest {
}
