import { Routes } from '@angular/router';
import { BuilderPage } from './builder/builder.page';
import { SavedBuildsPage } from './saved-builds/saved-builds.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'builder',
    loadComponent: () => import('./builder/builder.page').then( m => m.BuilderPage)
  },
  {
    path: 'saved-builds',
    loadComponent: () => import('./saved-builds/saved-builds.page').then( m => m.SavedBuildsPage)
  },
];
