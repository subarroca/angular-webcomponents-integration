import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme = '';
  isCollapsed: boolean;

  toggleCollapsed(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}
