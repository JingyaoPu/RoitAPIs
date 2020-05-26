import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '../store/champion-mastery.reducer';
import { Observable, ObjectUnsubscribedError, of, BehaviorSubject, EMPTY } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { startWith } from 'rxjs/operators';
import { TableComponent } from '../../shared/table/table.component'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  data$: Observable<any>;
  loading$: Observable<boolean>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    
  }

  constructor(private store: Store<fromReducer.leagueState>) {
    this.data$ = this.store.select(fromReducer.selectAllChampionMastery);
    this.loading$ = this.store.select(fromReducer.selectLoading).pipe(
      startWith(true)
    );
   }
}
