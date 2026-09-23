import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: Home },
  // {path:"blog", component:Blog},
  // {path:"about", component:About},
  // {path:"", component:Home},
];
