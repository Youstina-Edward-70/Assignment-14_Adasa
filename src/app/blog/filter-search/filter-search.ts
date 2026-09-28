import { BlogService } from './../../Services/blog-service';
import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { Category } from '../../Interfaces/category';
import { FormsModule } from '@angular/forms'
import { PostsService } from '../../Services/posts-service';

@Component({
  selector: 'app-filter-search',
  imports: [FormsModule],
  templateUrl: './filter-search.html',
  styleUrl: './filter-search.css',
})
export class FilterSearch {
  private readonly postsService = inject(PostsService);
  public readonly blogService = inject(BlogService);

  categories: Category[] = this.postsService.categories;
  searchTerm: string = '';
  setSearchInputValue(value: string): void {
    this.searchTerm = value;
    this.blogService.onSearchChange(value);
  }
}
