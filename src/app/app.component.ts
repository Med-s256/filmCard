import { Component, Input, OnInit } from '@angular/core';
import { TofSnapComponent } from './tof-snap/tof-snap.component';
import { FilmSnap } from './models/film-snap';

@Component({
  selector: 'app-root',
  imports: [TofSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  films!: FilmSnap[];
 
  ngOnInit(): void {
    this.films= [
      new FilmSnap(
        'titanic',
        'this film is sorted at public in 2007',
        'https://upload.wikimedia.org/wikipedia/commons/6/6e/St%C3%B6wer_Titanic.jpg',
        new Date(),
        10
      ),
      new FilmSnap(
        'mission impossible',
        'this film is sorted at public in 2015',
        'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/TITELIVE/50_5053083165475_vid.jpg',
        new Date(),
        75
      ),
      new FilmSnap(
        'ong back',
        'this film is sorted at public in 2003',
        'https://photos.tf1.fr/1200/720/vignette-16-9-584dbf-799738-0@1x.webp',
        new Date(),
        250
      ),
      new FilmSnap(
        'titanic11',
        'this film is sorted at public in 2008',
        'https://upload.wikimedia.org/wikipedia/commons/6/6e/St%C3%B6wer_Titanic.jpg',
        new Date(),
        999
      )
    ]
  
    this.films[0].setLocation('in the montain');
    this.films[2].setLocation('in the village')
  }
}
