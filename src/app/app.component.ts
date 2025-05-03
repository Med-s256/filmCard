import { Component } from '@angular/core';
import { FilmListComponent } from "./film-list/film-list.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [FilmListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent{

}
