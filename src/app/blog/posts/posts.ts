import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { BlogService } from '../../Services/blog-service';

@Component({
  selector: 'app-posts',
  imports: [ArticleCard],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  public readonly blogService = inject(BlogService);

  showStyle: 'grid' | 'list' = 'grid';

  ngOnInit(): void {
    this.blogService.updateFilteredPosts();
  }

  @Output() onSearchValueChange: EventEmitter<string> = new EventEmitter;
  sendSearchValue(value: string): void {
    this.onSearchValueChange.emit(value);
  }
}
