import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { SearchComponent } from './search/search.component';
import { AppDataService } from './app-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    UserMoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
