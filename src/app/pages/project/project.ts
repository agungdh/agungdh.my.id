import { Component, inject, OnInit } from '@angular/core';
import { Guest } from '../../layouts/guest/guest';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client';
import {ProjectService} from '../../services/project-service';

@Component({
  selector: 'app-project',
  imports: [Guest],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project implements OnInit {
  private readonly projectService: ProjectService = inject(ProjectService);

  ngOnInit() {
    this.projectService.getProjects()
  }
}
