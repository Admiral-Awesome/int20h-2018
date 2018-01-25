import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemesComponent } from './memes/memes.component';
import { MemeRateComponent } from './meme-rate/meme-rate.component';

const routes: Routes = [{
  path: '', component: MemesComponent
},
  { path : 'rating', component: MemeRateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
