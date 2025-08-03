import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Project } from './pages/project/project';

export const routes: Routes = [
  {
    path: '',
    component: Index,
  },
  {
    path: 'project',
    component: Project,
  },
];
