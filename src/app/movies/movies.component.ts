import { Component, OnInit, Output } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  title: string = "All Movies";
  movies: Movie[];
  @Output() btnFunc:string;

  constructor(private moviesService: AppDataService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
    this.btnFunc = 'add';
  }
  
}
