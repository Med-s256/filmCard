import { Component, Input, OnInit } from '@angular/core';
import { FilmSnap } from '../models/film-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tof-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './tof-snap.component.html',
  styleUrl: './tof-snap.component.scss',
})
export class TofSnapComponent implements OnInit {
  @Input() snapFilm!: FilmSnap;
  textButton = 'oh snap!';
  isSnapped = false;
  ngOnInit(): void {}

  snap(){
    if(this.isSnapped== false){
      this.snapFilm.onSnap();
      this.textButton='oops snapped !'
      this.isSnapped= true

    }
    else{
      this.snapFilm.unSnap();
      this.textButton = 'oh snap!';
      this.isSnapped= false
    }
  }

}
