import { Component, inject } from '@angular/core';
import { Post } from '../../Interfaces/post';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../Services/posts-service';

@Component({
  selector: 'app-choosen-articles',
  imports: [RouterLink],
  templateUrl: './choosen-articles.html',
  styleUrl: './choosen-articles.css',
})
export class ChoosenArticles {
  private readonly postsService = inject(PostsService);
  posts: Post[] = this.postsService.posts.slice(0, 3);
}
