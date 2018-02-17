import { Component, OnInit, Input, Output} from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  title: string = "My Movies";
  movies: Movie[];
  @Input() budget: number;

  constructor(private moviesService: AppDataService) { }

  ngOnInit() {
    this.movies = this.moviesService.getUserMovies();
    console.log(this.movies);
   // this.budget = this.moviesService.getBudget();
  }

  removeMovie(movie){
   this.moviesService.deleteMovie(movie);
  // this.budget = this.moviesService.getBudget();
  }

  searchMovie(str){
    this.moviesService.searchUserMovies(str);
    this.movies = this.moviesService.getUserMovies();

  }
}
