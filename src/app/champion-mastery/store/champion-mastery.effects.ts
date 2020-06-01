import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './champion-mastery.action';
import { ChampionMasteryService } from '../services/champion-mastery.service';
import { of, EMPTY } from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import { leagueEXP_v4 } from '../exp.model';




@Injectable()
export class Effects{
    private queryData: fromActions.QueryData;
    load$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.LoadingStart),
        tap((action) => {
          // console.log('queryDataInEffect' + JSON.stringify(action.queryData));
          this.queryData = action.queryData;
        }),
        mergeMap(action => this.championMasteryService.getData(action.queryData)
            .pipe(
                map(res => {
                    // console.log('res in payload' + JSON.stringify(res));
                    return fromActions.loadingSuccess({res: res as leagueEXP_v4[], queryData: this.queryData});
                }),
                catchError((err) => {
                    console.log(err);
                    return EMPTY;
                })
            )
        )
    ));


    constructor(
        private actions$: Actions,
        private championMasteryService: ChampionMasteryService
    ){}
}
