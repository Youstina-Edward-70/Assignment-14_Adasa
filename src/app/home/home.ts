import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { ChoosenArticles } from './choosen-articles/choosen-articles';
import { Categories } from './categories/categories';
import { NewArticles } from './new-articles/new-articles';
import { Subscripe } from './subscripe/subscripe';

@Component({
  selector: 'app-home',
  imports: [Header, ChoosenArticles, Categories, NewArticles, Subscripe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
