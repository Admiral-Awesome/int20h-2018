import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { MemesService } from './memes.service';


@NgModule({
  declarations: [
    AppComponent,
    MemesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
