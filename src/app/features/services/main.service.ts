import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private _http: HttpClient) { }

  getMoviesList() {
    return this._http.get("https://movies-app1.p.rapidapi.com/api/movies").pipe(
      catchError(error => {
        console.error("Error", error.message);
        return EMPTY;
      })
    );
  }

  // getMoviesList() {
  //   return this._http.get("https://movies-app1.p.rapidapi.com/api/movies").pipe(
  //     catchError(error => {
  //       console.error("Error", error.message);
  //       return EMPTY;
  //     })
  //   );
  // }
}
