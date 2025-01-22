import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius: number | null = null; // para que empiece vacio
  fahrenheit: number | null = null; // para que empiece vacio

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.celcius = null;
    this.fahrenheit = null;
  }

  convertToCelcius() {
    if (this.fahrenheit != null) {

      this.celcius = (this.fahrenheit - 32) * 5 / 9;
    }
  }

  converToFahrenheit() {
    if (this.celcius != null) {
      this.fahrenheit = this.celcius * 9 / 5 + 32;
    }
  }

}
