import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './champion-mastery.action';
import { ChampionMasteryService } from '../services/champion-mastery.service';
import { of, EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { leagueEXP_v4 } from '../exp.model';



@Injectable()
export class Effects{
    load$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.LoadingStart),
        mergeMap(action => this.championMasteryService.getData(action.queryData)
            .pipe(
                map(res => {
                    // console.log("res in payload"+JSON.stringify(res));
                    return fromActions.loadingSuccess({res: res as leagueEXP_v4[]});
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
