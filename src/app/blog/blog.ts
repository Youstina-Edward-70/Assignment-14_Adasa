import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { FilterSearch } from './filter-search/filter-search';
import { Posts } from './posts/posts';
import { BlogService } from '../Services/blog-service';

@Component({
  selector: 'app-blog',
  imports: [Header, FilterSearch, Posts],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
  providers: [BlogService],
})
export class Blog { }
