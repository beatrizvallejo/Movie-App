import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private apiKey:string = "658201409e181d66dd1d75e1a03f5db3";
  private urlMovieDb:string = "https://api.themoviedb.org/3";

  constructor(private http:HttpClient) { }

  getPopulars(){

    let url = `${this.urlMovieDb}/movie/popular?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "JSONP_CALLBACK");

  }

  getMovieById(id:string){

    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "JSONP_CALLBACK");


  }

  searchMovie(text:string){
    let url = `${this.urlMovieDb}/search/movie?api_key=${this.apiKey}&query=${text}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "JSONP_CALLBACK");
  }

  getLatest(){
    let url = `${this.urlMovieDb}/movie/top_rated?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, "JSONP_CALLBACK");
  }


}


