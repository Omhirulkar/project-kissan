import { Routes } from '@angular/router';

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
    path: 'diagnosis',
    loadComponent: () =>
      import('./diagnosis/diagnosis.component').then(m => m.DiagnosisComponent),
  },
];
