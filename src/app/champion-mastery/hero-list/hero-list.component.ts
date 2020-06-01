import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromReducer from '../store/champion-mastery.reducer';
import { Observable, ObjectUnsubscribedError, of, BehaviorSubject, EMPTY } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import {filter, map, startWith, tap} from 'rxjs/operators';
import * as fromAction from '../store/champion-mastery.action';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  data$: Observable<any> = EMPTY;
  selected$: Observable<{[name: string]: string}>;
  loading$: Observable<boolean>;

  apiParams = {
    queue: ['RANKED_SOLO_5x5', 'RANKED_TFT', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
    tier: ['CHALLENGER', 'GRANDMASTER', 'MASTER', 'DIAMOND', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'],
    division: ['I', 'II', 'III', 'IV'],
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit(): void {

  }

  search(selected: {[name: string]: string}){
    // console.log('selected' + JSON.stringify(selected));
    this.store.dispatch(fromAction.LoadingStart({queryData: {queryData: selected}}));
  }

  constructor(private store: Store<fromReducer.leagueState>) {
    this.data$ = this.store.select(fromReducer.selectAllChampionMastery);
    this.selected$ = this.store.select(fromReducer.selectQueryData);
    this.loading$ = this.store.select(fromReducer.selectLoading);
   }
}
