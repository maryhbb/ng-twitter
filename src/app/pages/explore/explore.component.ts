import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TweetService } from 'src/app/tweet.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  constructor (private tweetService: TweetService){}
 
  
  public tweets : Tweet [] = []
  
  ngOnInit(): void {
    this.tweets = this.tweetService.tweets ;
    }
}
