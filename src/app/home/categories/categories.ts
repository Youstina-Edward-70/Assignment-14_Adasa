import { Component, inject } from '@angular/core';
import { Category } from '../../Interfaces/category';
import { RouterLink } from '@angular/router';
import { PostsService } from './../../Services/posts-service';
import { BlogService } from '../../Services/blog-service';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private readonly postsService = inject(PostsService);
  public blogService = inject(BlogService);
  categories: Category[] = this.postsService.categories;
}
