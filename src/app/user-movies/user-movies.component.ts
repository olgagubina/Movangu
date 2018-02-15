import { Component, OnInit, Input, Output} from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  title: string = "User Movies";
  movies: Movie[];

  constructor(private moviesService: AppDataService) { }

  ngOnInit() {
    this.movies = this.moviesService.getUserMovies();
    console.log(this.movies);
  }

  removeMovie(movie){
   this.moviesService.deleteMovie(movie);
  }
}
