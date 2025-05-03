import { Component, Input, OnInit } from '@angular/core';
import { FilmSnap } from '../models/film-snap';
import {
  DatePipe,
  NgClass,
  NgStyle,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { FilmSnapService } from '../services/film-snap.service';

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
  constructor(private filmserv: FilmSnapService) {}
  ngOnInit(): void {}

  snap() {
    if (this.isSnapped == false) {
      this.filmserv.snapFilm(this.snapFilm.id, 'snap');
      this.textButton = 'oops snapped !';
      this.isSnapped = true;
    } else {
      this.filmserv.snapFilm(this.snapFilm.id, 'unsnap');
      this.textButton = 'oh snap!';
      this.isSnapped = false;
    }
  }
}
