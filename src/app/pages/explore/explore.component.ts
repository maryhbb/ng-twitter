import { Component } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
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
