import {Component, inject, OnInit} from '@angular/core';
import {Guest} from "../../layouts/guest/guest";
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {gql} from '@apollo/client';

@Component({
  selector: 'app-project',
    imports: [
        Guest
    ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project implements OnInit {
  private readonly apollo: Apollo = inject(Apollo)

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          {
            projects {
              id
              releaseDate
              description
              name
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
      console.log(result);
    });
  }
}
