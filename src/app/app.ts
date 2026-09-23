import { Category } from './Interfaces/category';
import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Post } from './Interfaces/post';
import { SiteInfo } from './Interfaces/site-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Adasa');

  ngAfterViewInit(): void {
    initFlowbite();
  }
}
