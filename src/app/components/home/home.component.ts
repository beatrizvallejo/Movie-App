import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../providers/movies.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public listResults:any = [];

  constructor( public _ms:MoviesService, private router:Router ) {
    this._ms.getPopulars().subscribe( resp =>{
      this.listResults = resp['results'];
      console.log(this.listResults);
      
    })
   }

  ngOnInit(): void {
    
  }

  seeMovie(index:number){
    this.router.navigate (['/movie' , index])
  }

  

}
