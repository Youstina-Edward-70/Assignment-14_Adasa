import { Component } from '@angular/core';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-blog',
  imports: [Header],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog { }
