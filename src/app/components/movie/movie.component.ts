import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../../providers/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public id:string;
  public infoMovie:any = [];

  constructor(public _ms:MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this._ms.getMovieById(this.id).subscribe( resp =>{

      this.infoMovie = resp;
      console.log(this.infoMovie);
    })

  }

}
