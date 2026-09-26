import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: Home },
  { path: "blog", component: Blog },
  { path: "about", component: About },
  { path: "not-found", component: NotFound },
  { path: "**", redirectTo: "not-found", pathMatch: 'full' },
];
