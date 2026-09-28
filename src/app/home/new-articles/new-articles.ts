import { Component, inject } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { ArticleCard } from '../../components/article-card/article-card';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../Services/posts-service';

@Component({
  selector: 'app-new-articles',
  imports: [ArticleCard, RouterLink],
  templateUrl: './new-articles.html',
  styleUrl: './new-articles.css',
})
export class NewArticles {
  private readonly postsService = inject(PostsService);
  newPosts: Post[] = this.postsService.posts.slice(3, 6);
}
