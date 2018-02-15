import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Movie } from '../model/movie'; 
/* import { Output } from '@angular/core/src/metadata/directives'; */

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() btnFunc: string;
  @Input() movies: Movie[];

  constructor(private movieService: AppDataService) { }
  
  ngOnInit() {
    console.log(this.movies);
  }

}
