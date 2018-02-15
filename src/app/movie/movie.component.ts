import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() btnText: string;
  @Output() innerButtonClick: EventEmitter<Movie> = new EventEmitter<Movie>();
  
  constructor() { }

  ngOnInit() {
    console.log(this.btnText);
  }

  clickFunc(){
    this.innerButtonClick.emit(this.movie);
  }
}
