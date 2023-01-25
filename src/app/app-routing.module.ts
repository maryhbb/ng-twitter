import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { TweetComponent } from './components/tweet/tweet.component';

const routes: Routes = [
{path: '', component: ExploreComponent},
{path: 'tweet', component: TweetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
