import { PostsService } from './../Services/posts-service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteInfo } from '../Interfaces/site-info';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly postsService = inject(PostsService);
  siteInfo: SiteInfo = this.postsService.siteInfo;
}
