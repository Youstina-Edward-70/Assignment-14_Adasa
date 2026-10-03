import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { FilterSearch } from './filter-search/filter-search';
import { Posts } from './posts/posts';

@Component({
  selector: 'app-blog',
  imports: [Header, FilterSearch, Posts],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog { }
