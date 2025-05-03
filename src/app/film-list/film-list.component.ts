import { Component, OnInit } from '@angular/core';
import { FilmSnap } from '../models/film-snap';
import { TofSnapComponent } from '../tof-snap/tof-snap.component';
import { FilmSnapService } from '../services/film-snap.service';

@Component({
  selector: 'app-film-list',
  imports: [TofSnapComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})
export class FilmListComponent implements OnInit {
  films!: FilmSnap[];
 constructor(private filmSer: FilmSnapService){

 }
  ngOnInit(): void {
    this.films= this.filmSer.getFilms();
   
  }
}
