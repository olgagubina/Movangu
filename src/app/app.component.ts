import { Component,OnInit } from '@angular/core';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movangu';
  budget:number;
  constructor(private moviesService: AppDataService) { }

  ngOnInit(){
 //   this.budget = this.moviesService.getBudget();
  }

}
