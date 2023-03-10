import { Injectable } from '@angular/core';
import { Tweet } from './models/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  public tweets : Tweet [] = [
    {
      username : "President Biden",
      avatar: "assets/images/biden.jpg",
      date: "11 Jan 2023",
      message: "I'm building back an economy with better jobs and better pay -one that includes good-paying jobs that don’t require a four-year degree, and communities that are too often forgotten."
    },
    {
      username : "President Biden",
      avatar: "assets/images/biden.jpg",
      date: "11 Jan 2023",
      message: "I'm building back an economy with better jobs and better pay -one that includes good-paying jobs that don’t require a four-year degree, and communities that are too often forgotten."
    }
  ];
}
