import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss']
})
export class CreateTweetComponent {

  tweetForm = new FormGroup({
    username: new FormControl(),
    date: new FormControl(),
    message: new FormControl()
  })

  maketweet() {
      console.log(this.tweetForm.value);
      
    }

}
