import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTweetComponent } from './pages/create-tweet/create-tweet.component';
import { ExploreComponent } from './pages/explore/explore.component';

const routes: Routes = [
{path: '', component: ExploreComponent},
{path: 'create-tweet', component: CreateTweetComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
