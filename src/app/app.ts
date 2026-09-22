import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Youstina-Edward-fri-3-9-online-Assignment14-01211281045');
  ngOnInit(): void {
    initFlowbite();
  }
}
