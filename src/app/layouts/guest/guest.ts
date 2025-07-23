import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-guest',
  imports: [],
  templateUrl: './guest.html',
  styleUrl: './guest.css'
})
export class Guest {
  protected readonly year = signal(new Date().getFullYear());
}
