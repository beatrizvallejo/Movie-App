import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../providers/movies.service';

import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listResults:any = [];
  listResultsSearch:any = [];
  
  constructor(public _ms:MoviesService, private router:Router) {
      this._ms.getLatest().subscribe( resp =>{
      this.listResults = resp['results'];
    })

   }

  ngOnInit(): void {
    console.log(this.listResultsSearch);
  }

  seeMovie(index:number){
    this.router.navigate (['/movie' , index])
  }

  showResults(text:string){
    event.preventDefault();
    this._ms.searchMovie(text).subscribe( resp =>{
      this.listResultsSearch = resp['results'];
      console.log(this.listResultsSearch);
    })
  }
}
