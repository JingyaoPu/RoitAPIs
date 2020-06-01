import { leagueEXP_v4 } from '../exp.model';
import { createAction, props } from '@ngrx/store';

export interface QueryData{
    queryData: {[name: string]: string};
}

export const LoadingStart = createAction(
    '[Champion Mastery] loading start',
    props<{queryData: QueryData}>()
);

export const loadingSuccess = createAction(
    '[Champion Mastery] loading success',
    props<{res: leagueEXP_v4[], queryData: QueryData}>()
);

