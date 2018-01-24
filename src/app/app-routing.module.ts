import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemesComponent } from './memes/memes.component';

const routes: Routes = [{
  path: '', component: MemesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
