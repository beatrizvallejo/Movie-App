import { Component } from '@angular/core';

//Services
import {MoviesService} from './providers/movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MoviesApp';
}
