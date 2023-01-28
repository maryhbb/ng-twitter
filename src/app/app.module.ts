import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetItemComponent } from './components/tweet-item/tweet-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CreateTweetComponent } from './pages/create-tweet/create-tweet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TweetItemComponent,
    NavbarComponent,
    ExploreComponent,
    CreateTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
