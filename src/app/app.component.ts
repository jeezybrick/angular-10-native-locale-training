import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public minutes: number = 0;

  public inc(): void {
    this.minutes += 1;
  }

  public dec(): void {
    if (this.minutes === 0) {
      return;
    }
    this.minutes -= 1;
  }
}
