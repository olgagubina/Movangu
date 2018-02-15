import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Input() btnFunc: string;
  
  constructor(private moviesService: AppDataService) { }

  ngOnInit() {
    //this.movies = this.moviesService.getMovies();
  }

  addMovie() {
    this.moviesService.addMovie(this.movie); 
  }

  deleteMovie() {
    this.moviesService.deleteMovie(this.movie); 
  }
}
