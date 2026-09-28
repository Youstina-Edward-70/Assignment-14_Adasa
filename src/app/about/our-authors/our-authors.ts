import { Author } from './../../Interfaces/author';
import { Component, inject } from '@angular/core';
import { AuthorCard } from '../../components/author-card/author-card';
import { PostsService } from '../../Services/posts-service';
import { Post } from '../../Interfaces/post';

@Component({
  selector: 'app-our-authors',
  imports: [AuthorCard],
  templateUrl: './our-authors.html',
  styleUrl: './our-authors.css',
})
export class OurAuthors {
  private readonly postsService = inject(PostsService);
  posts: Post[] = this.postsService.posts;
  authors: Author[] = this.posts.map(post => post.author);
}
