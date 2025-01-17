import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root', // si dice que tiene que ser standalone el componente se pone standalone = true
  imports: [RouterModule, HeaderComponent, ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular-Prueba David';
  prueba = 'vaya frio que hace'
}
