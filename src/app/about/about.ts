import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { OurValues } from './our-values/our-values';
import { OurAuthors } from './our-authors/our-authors';
import { ContactUs } from './contact-us/contact-us';

@Component({
  selector: 'app-about',
  imports: [Header, OurValues, OurAuthors, ContactUs],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About { }
