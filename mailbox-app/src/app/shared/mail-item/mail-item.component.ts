import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent {
  @Input() sender = '';
  @Input() subject = '';
}
