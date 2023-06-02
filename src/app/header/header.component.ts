import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() resetButtonClicked = new EventEmitter<number>();
  totalValue:number = 0
  reset() {
    this.resetButtonClicked.emit(this.totalValue);
  }
}
