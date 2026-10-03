import { inject, Injectable } from '@angular/core';
import { PostsService } from './posts-service';
import { Post } from '../Interfaces/post';
import { catType } from '../Interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly postsService = inject(PostsService);

  searchTerm: string = '';
  selectedCategory: catType = 'الكل';
  currentPagePagination: number = 1;
  postsPerOnePage: number = 6;

  totalPages: number = 1;
  pageNumbers: number[] = [];
  filteredPosts: Post[] = [];
  currentPagePosts: Post[] = [];

  updateFilteredPosts(): void {
    const term: string = this.searchTerm.trim().toLowerCase();

    this.filteredPosts = this.postsService.posts.filter(post => {
      const matchCat = this.selectedCategory === 'الكل'
        || post.category === this.selectedCategory;

      const matchSearch = !term
        || post.title.toLowerCase().includes(term)
        || post.excerpt.toLowerCase().includes(term);

      return matchCat && matchSearch;
    });

    this.totalPages = Math.ceil(this.filteredPosts.length / this.postsPerOnePage);
    this.pageNumbers.length = 0;
    for (let i = 0; i < this.totalPages; i++) {
      this.pageNumbers.push(i + 1);
    }

    this.currentPagePagination = 1;

    this.updateCurrentPagePosts();
  }

  private updateCurrentPagePosts(): void {
    const startIdx = (this.currentPagePagination - 1) * this.postsPerOnePage;
    const endIdx = startIdx + this.postsPerOnePage;
    this.currentPagePosts = this.filteredPosts.slice(startIdx, endIdx);
  }

  selectCategory(category: catType): void {
    this.selectedCategory = category;
    this.updateFilteredPosts();
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.updateFilteredPosts();
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 365,
      behavior: 'smooth'
    })
  }

  goToPage(pageNum: number) {
    if (pageNum >= 1 && pageNum <= this.totalPages) {
      this.currentPagePagination = pageNum;
      this.updateCurrentPagePosts();
      this.scrollToTop();
    }
  }

  nextPage() {
    if (this.currentPagePagination < this.totalPages) {
      this.currentPagePagination++;
      this.updateCurrentPagePosts();
      this.scrollToTop();
    }
  }

  prevPage() {
    if (this.currentPagePagination > 1) {
      this.currentPagePagination--;
      this.updateCurrentPagePosts();
      this.scrollToTop();
    }
  }

  getPostBySlug(slug: string): Post | undefined {
    return this.postsService.posts.find(post => post.slug === slug);
  }

  getRelatedPosts(currentPostId: number, category: catType): Post[] {
    return this.postsService.posts
      .filter(post => post.category === category && post.id !== currentPostId)
      .slice(0, 3);
  }
}
