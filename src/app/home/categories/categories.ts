import { PostsService } from './../../Services/posts-service';
import { Component, inject } from '@angular/core';
import { Category } from '../../Interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  private readonly postsService = inject(PostsService);
  categories: Category[] = this.postsService.categories;
}
