import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent implements OnInit {
  currentImage1;
  currentImage2;
  isLoading = false;
  constructor(private ms: MemesService) {

  }

  ngOnInit() {
    this.reloadMemes();
  }

  reloadMemes() {
    this.ms.getMemes().subscribe( (response:any) => {
      [this.currentImage1, this.currentImage2] = [JSON.parse(response._body).memePair[0],JSON.parse(response._body).memePair[0]];
      this.isLoading = true;
    });
  }

  vote(isFirst) {
    const imgObj = isFirst === true ? {
      selectedMeme : this.currentImage1,
      ignoredMeme : this.currentImage2
    } : {
      selectedMeme : this.currentImage2,
      ignoredMeme : this.currentImage1
    }
    this.ms.voteMemes(imgObj).subscribe( _ => {
      console.log(_);
      this.reloadMemes();
    })
  }
  

}
