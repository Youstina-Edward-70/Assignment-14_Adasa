import { Component, Input } from '@angular/core';
import { Author } from '../../Interfaces/author';

@Component({
  selector: 'app-subscripe',
  imports: [],
  templateUrl: './subscripe.html',
  styleUrl: './subscripe.css',
})
export class Subscripe {
  @Input() firstThreeAuthors!: Author[];
}
