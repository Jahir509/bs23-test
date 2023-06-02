import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bs23-test';
  resetTotalValue = 0

  resetTotal($event: number) {
    if($event === 0)
      this.resetTotalValue = -100
  }
}
