import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromActions from './auth.actions';
import { of, EMPTY, Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable()
export class Effects{

    login$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.loginStart),
        map(() => fromActions.loginSuccess(new User(
            'jingyaopu@gmial.com',
            'jingyao',
            'token',
            new Date()
        )),
        catchError(err => {
            console.log(err);
            return EMPTY;
        })
        )
    )
    );

    constructor(private actions$: Actions){}
}
