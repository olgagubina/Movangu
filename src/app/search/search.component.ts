import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchVal: string;
  @Output() searchButtonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(){
    this.searchButtonClick.emit(this.searchVal);
  }
}
