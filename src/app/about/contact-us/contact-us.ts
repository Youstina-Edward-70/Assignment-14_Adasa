import { PostsService } from './../../Services/posts-service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUs {
  private readonly postsService = inject(PostsService);
  email: string = this.postsService.siteInfo.email;
}
