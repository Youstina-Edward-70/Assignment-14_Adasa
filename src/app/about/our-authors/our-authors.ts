import { Author } from './../../Interfaces/author';
import { Component, Input } from '@angular/core';
import { AuthorCard } from '../../components/author-card/author-card';

@Component({
  selector: 'app-our-authors',
  imports: [AuthorCard],
  templateUrl: './our-authors.html',
  styleUrl: './our-authors.css',
})
export class OurAuthors {
  @Input({ 'required': true }) authors!: Author[];
}
