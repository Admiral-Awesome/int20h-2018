import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MemesComponent } from './memes/memes.component';
import { MemesService } from './memes.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MemeRateComponent } from './meme-rate/meme-rate.component';


@NgModule({
  declarations: [
    AppComponent,
    MemesComponent,
    MemeRateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [MemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
