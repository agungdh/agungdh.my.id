import {Component, inject, OnInit} from '@angular/core';
import {Guest} from '../../layouts/guest/guest';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-index',
  imports: [
    Guest
  ],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index implements OnInit {
  private readonly httpClient: HttpClient = inject(HttpClient)

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.httpClient.get('https://api.agungdh.my.id', {responseType: "text"}).subscribe((response) => {
      console.log(response);
    })
  }
}
