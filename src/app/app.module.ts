import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { UserMoviesComponent } from './user-movies/user-movies.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AppDataService } from './app-data.service';
import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    UserMoviesComponent,
    HeaderComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule 
  ],
  providers: [AppDataService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
