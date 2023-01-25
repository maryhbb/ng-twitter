import { Component } from '@angular/core';
import { Tweet } from './models/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-twitter';
  public tweets : Tweet [] = [
    {
      user : "President Biden",
      avatar: "assets/images/biden.jpg",
      date: "11 Jan 2023",
      massage: "I'm building back an economy with better jobs and better pay -one that includes good-paying jobs that don’t require a four-year degree, and communities that are too often forgotten."
    },
    {
      user : "President Biden",
      avatar: "assets/images/biden.jpg",
      date: "11 Jan 2023",
      massage: "I'm building back an economy with better jobs and better pay -one that includes good-paying jobs that don’t require a four-year degree, and communities that are too often forgotten."
    }
  ];
  
}
