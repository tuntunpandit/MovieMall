import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movies } from '../../models/movie.model';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMovies$: Observable<Movies[]> | undefined | null;
  originalLists: Movies[] = [];

  constructor(private _mainService: MainService) {}

  ngOnInit(): void {
    this.trendingMovies$ = this._mainService.getMoviesList().pipe(
      map((movies: any) => {
        this.originalLists = movies['results'] as Movies[];
        return movies['results'];
      })
    );
  }

  searchMovieList(serachTerm: {
    searchByTitle: string;
    searchByRating: string;
  }) {
    let result = Object.values(serachTerm).every((term) => term === '');
    if (result) {
      this.trendingMovies$ = of(this.originalLists);
    } else {
      this.trendingMovies$ = of(
        this.originalLists.filter((list) => {
          return (
            list.title
              .toLowerCase()
              .includes(serachTerm.searchByTitle.toLowerCase()) &&
            list.rating
              .toLowerCase()
              .includes(serachTerm.searchByRating.toLowerCase())
          );
        })
      );
    }
  }

  filterMovies(
    list: Movies,
    serachTerm: { searchByTitle: string; searchByRating: string }
  ) {
    return (
      list.title
        .toLowerCase()
        .includes(serachTerm.searchByTitle.toLowerCase()) ||
      list.rating
        .toLowerCase()
        .includes(serachTerm.searchByRating.toLowerCase())
    );
  }
}
