import { Component, Input } from '@angular/core';
import { Author } from '../../Interfaces/author';

@Component({
  selector: 'app-author-card',
  imports: [],
  templateUrl: './author-card.html',
  styleUrl: './author-card.css',
})
export class AuthorCard {
  @Input({ 'required': true }) author!: Author;
}
