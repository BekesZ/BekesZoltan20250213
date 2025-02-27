import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() numA: number = 0;        // Parenttől kapott első szám
  @Input() numB: number = 0;        // Parenttől kapott második szám
  @Output() result = new EventEmitter<number>();  // Eredmény visszaküldése a szülőnek

  calculate(operation: string) {    // Számítás végrehajtása
    if (operation === '+') {
      this.result.emit(this.numA + this.numB); // Összeadás
    } else if (operation === '-') {
      this.result.emit(this.numA - this.numB); // Kivonás
    }
  }
}