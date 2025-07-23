import { Routes } from '@angular/router';
import {Index} from './pages/index';
import {Tehe} from './pages/tehe/tehe';

export const routes: Routes = [
  {
    path: '',
    component: Index
  },
  {
    path: 'tehe',
    component: Tehe
  }
];
