import { Component, Input } from '@angular/core';
import { Category } from '../../Interfaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
  @Input() categories!: Category[];
}
