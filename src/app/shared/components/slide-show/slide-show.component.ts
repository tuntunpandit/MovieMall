import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/features/models/movie.model';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit, OnChanges {
  @Input() movieList: Movies[] | null | undefined;
  constructor() { }
  
  ngOnInit(): void {
    console.log("movieList", this.movieList);
  } 

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Changes", changes)
    // console.log("NgOnchnage", this.movieList);
  }

}
