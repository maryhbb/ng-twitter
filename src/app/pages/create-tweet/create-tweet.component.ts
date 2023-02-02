import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TweetService } from 'src/app/tweet.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss'],
})
export class CreateTweetComponent {
  constructor(private tweetService: TweetService) {}

  tweetForm: FormGroup = new FormGroup({
    username: new FormControl(),
    avatar: new FormControl(),
    date: new FormControl(),
    message: new FormControl(),
  });

  makeTweet(): void {
    console.log(this.tweetForm.value);

    this.tweetService.tweets.push(this.tweetForm.value);
  }
}
