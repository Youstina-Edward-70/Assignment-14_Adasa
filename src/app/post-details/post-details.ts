import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../Interfaces/post';
import { BlogService } from '../Services/blog-service';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  public blogService = inject(BlogService);
  post!: Post;
  relatedPosts: Post[] = [];
  brief: string = '';
  sections: { id: string; title: string; content: string; }[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const postId = params['postId'];
      if (postId) {
        const postFound = this.blogService.getPostBySlug(postId);
        if (postFound) {
          this.post = postFound;
          this.handleContent(this.post);
          this.relatedPosts = this.blogService.getRelatedPosts(this.post.id, this.post.category);
        }
      }
    })
  }

  handleContent(post: Post): void {
    this.sections.length = 0;
    const parts = post.content.split(/(?=##\s+)/);
    this.brief = parts[0] ? parts[0].trim() : '';

    parts.forEach((part, idx) => {
      if (part.startsWith('##')) {
        const lines = part.split('\n');
        const title = lines[0].replace('##', '').trim();
        const content = lines.slice(1).join('\n').trim();

        this.sections.push({
          id: `section-${idx - 1}`,
          title,
          content
        });
      }
    });
  }
}
