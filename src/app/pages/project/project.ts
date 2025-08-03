// src/app/pages/project/project.ts
import { Component, inject } from '@angular/core';
import { Guest } from '../../layouts/guest/guest';
import { ProjectService, ProjectType } from '../../services/project-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [Guest, CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  private readonly projectService = inject(ProjectService);
  public projects$: Observable<ProjectType[]> =
    this.projectService.getProjects();
}
