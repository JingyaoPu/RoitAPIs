import { leagueEXP_v4 } from '../exp.model';
import { createAction, props } from '@ngrx/store';

export interface QueryData{
    queue: string;
    tier: string;
    division: string;
}

export const LoadingStart = createAction(
    '[Champion Mastery] loading start',
    props<{queryData: QueryData}>()
);

export const loadingSuccess = createAction(
    '[Champion Mastery] loading success',
    props<{res: leagueEXP_v4[]}>()
);

