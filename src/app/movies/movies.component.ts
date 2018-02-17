import { Component, OnInit, Output,Input } from '@angular/core';
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
  @Input() budget: number;
  
  constructor(private moviesService: AppDataService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  //  this.budget = this.moviesService.getBudget();
  }

  addMovie(movie:Movie){
    this.moviesService.addMovie(movie);
 //   this.budget = this.moviesService.getBudget();
  }

  searchMovie(str){
    this.moviesService.searchAllMovies(str);
    this.movies = this.moviesService.getMovies();
  }
  
}
