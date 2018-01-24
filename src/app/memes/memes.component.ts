import { Component, OnInit } from '@angular/core';
import { MemesService } from '../memes.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent implements OnInit {

  constructor(private ms: MemesService) {

  }

  ngOnInit() {
    this.ms.getMemes().subscribe(response => {
      console.log(response);
    });
  }

}
