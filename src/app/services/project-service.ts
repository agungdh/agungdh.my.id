import {inject, Injectable} from '@angular/core';
import {gql} from '@apollo/client';
import {Apollo} from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly apollo: Apollo = inject(Apollo);

  public getProjects() {
    return this.apollo
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
  }
}
