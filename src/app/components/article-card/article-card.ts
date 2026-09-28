import { Component, Input } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  imports: [RouterLink],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
})
export class ArticleCard {
  @Input({ 'required': true }) post!: Post;
  @Input() showStyle: 'grid' | 'list' = 'grid';
}
