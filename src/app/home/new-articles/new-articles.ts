import { Component, Input } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { ArticleCard } from '../../components/article-card/article-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-articles',
  imports: [ArticleCard, RouterLink],
  templateUrl: './new-articles.html',
  styleUrl: './new-articles.css',
})
export class NewArticles {
  @Input() newPosts!: Post[];
}
