import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AppDataService } from './app-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    MovieComponent,
    UserMoviesComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
