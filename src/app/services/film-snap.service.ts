import { Injectable } from "@angular/core";
import { FilmSnap } from "../models/film-snap";
import { snapType } from "../models/snap-type.type";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class FilmSnapService {

    films: FilmSnap[]=[
      new FilmSnap(
        'titanic',
        'this film is sorted at public in 2007',
        'https://upload.wikimedia.org/wikipedia/commons/6/6e/St%C3%B6wer_Titanic.jpg',
        new Date(),
        10
      ).withLocation("à la montagne"),
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
      ).withLocation("in the beatch"),
      new FilmSnap(
        'titanic11',
        'this film is sorted at public in 2008',
        'https://upload.wikimedia.org/wikipedia/commons/6/6e/St%C3%B6wer_Titanic.jpg',
        new Date(),
        999
      )
    ]
  getFilms(): FilmSnap[]{
    return [... this.films];
  }
   
  snapFilm(filmId:string, snapType: snapType): void{
    const film: FilmSnap | undefined = this.films.find(filmSnap => filmSnap.id === filmId)
    if(!film){
        throw new Error('film not found');
        
    }
    film.snapAction(snapType);
  }
 
}