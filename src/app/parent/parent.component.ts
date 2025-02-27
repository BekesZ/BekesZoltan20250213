import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a: number = 0;      // Első szám
  b: number = 0;      // Második szám
  result: number = 0; // Eredmény tárolása

  setResult(value: number) { // Eseménykezelő metódus
    this.result = value;
  }
}
