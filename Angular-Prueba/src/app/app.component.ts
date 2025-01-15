import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // si dice que tiene que ser standalone el componente se pone standalone = true
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular-Prueba David';
  prueba = 'vaya frio que hace'
}
