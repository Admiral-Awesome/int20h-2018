import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-meme-rate',
  templateUrl: './meme-rate.component.html',
  styleUrls: ['./meme-rate.component.scss']
})
export class MemeRateComponent implements OnInit {
  memes = [];
  constructor(private ms: MemesService) { }

  ngOnInit() {
    this.ms.getTopMemes().subscribe( (memes:any) => {
      this.memes = JSON.parse(memes._body).items.splice(0,10);
    });
  }

}
