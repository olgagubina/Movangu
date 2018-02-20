import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[];
  title = 'Movangu';

  constructor(private appdataservice: AppDataService) { }

  ngOnInit() {
    this.users = this.appdataservice.getUser();
  }

}
