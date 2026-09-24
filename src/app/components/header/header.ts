import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ 'required': true }) badgeText: string = '';
  @Input({ 'required': true }) description: string = '';

  @Input() sectionStyle: string = '';
  @Input() badgeStyle: string = '';
  @Input() titleStyle: string = '';
  @Input() descriptionStyle: string = '';
}
