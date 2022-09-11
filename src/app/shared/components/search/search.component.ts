import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  filters: FormGroup = new FormGroup({
    searchByTitle: new FormControl(''),
    searchByRating: new FormControl(''),
  });
  @Output('searchTerm') searchTerm: EventEmitter<{
    searchByTitle: string;
    searchByRating: string;
  }> = new EventEmitter<{ searchByTitle: string; searchByRating: string }>();
  @Input() totalMovies: number | undefined;
  constructor() {}

  ngOnInit(): void {
    this.filters.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(async (search) => this.searchTerm.emit(search))
      )
      .subscribe();
  }
}
