import { Injectable } from '@angular/core';
import { leagueEXP_v4 } from '../exp.model';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromAction from '../store/champion-mastery.action';
import * as fromReducer from '../store/champion-mastery.reducer';

@Injectable({
  providedIn: 'root'
})
export class ChampionMasteryResolverService implements Resolve<leagueEXP_v4>{
  resolve(){
    console.log('resolving!');
    this.store.dispatch(fromAction.LoadingStart(null));
    return null;
  }
  constructor(private store: Store) { }
}
