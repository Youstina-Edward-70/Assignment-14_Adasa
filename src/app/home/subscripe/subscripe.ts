import { Component, inject } from '@angular/core';
import { Author } from '../../Interfaces/author';
import { PostsService } from '../../Services/posts-service';

@Component({
  selector: 'app-subscripe',
  imports: [],
  templateUrl: './subscripe.html',
  styleUrl: './subscripe.css',
})
export class Subscripe {
  private readonly postsService = inject(PostsService);
  firstThreeAuthors: Author[] = this.postsService.posts.slice(0, 3).map(post => post.author);
}
