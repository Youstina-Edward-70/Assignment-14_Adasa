import { Component, Input } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choosen-articles',
  imports: [RouterLink],
  templateUrl: './choosen-articles.html',
  styleUrl: './choosen-articles.css',
})
export class ChoosenArticles {
  @Input() posts!: Post[];
}
