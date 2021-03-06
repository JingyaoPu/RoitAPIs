import { leagueEXP_v4 } from '../exp.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from './champion-mastery.action';

// tslint:disable-next-line:class-name
export interface leagueState extends EntityState<leagueEXP_v4>{
    loading: boolean;
    queryData: {[name: string]: string};
}

export function selectLeagueId(a: leagueEXP_v4){
    return a.leagueId;
}

export function selectsummonerId(a: leagueEXP_v4){
    return a.summonerId;
}

export function sortByLeagueId(a: leagueEXP_v4, b: leagueEXP_v4){
    return a.leagueId.localeCompare(b.leagueId);
}

export function sortBySummonerId(a: leagueEXP_v4, b: leagueEXP_v4){
    return a.summonerId.localeCompare(b.summonerId);
}

export const adaptor: EntityAdapter<leagueEXP_v4> = createEntityAdapter<leagueEXP_v4>({
    selectId: selectsummonerId,
    sortComparer: sortBySummonerId
});

export const initialState: leagueState = adaptor.getInitialState({
    loading: null,
    queryData: {}
});


const championMasteryReducer = createReducer(
    initialState,
    on(fromActions.loadingSuccess, (state, { res, queryData}) => {
        // console.log("success"+JSON.stringify(res));
        return adaptor.setAll(res, {...state, loading: false, ...queryData});
    }),
    on(fromActions.LoadingStart, (state, {queryData}) => {
        console.log('loadingStart received by reducer');
        return {...state, loading: true, ...queryData};
    })
);

export function reducer(state: leagueState | null, action: Action){
    return championMasteryReducer(state, action);
}

export const selectChampionMasteryState = createFeatureSelector<leagueState>('ChampionMastery');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
 } = adaptor.getSelectors();

export const selectAllChampionMastery = createSelector(
    selectChampionMasteryState,
    selectAll
  );

export const selectLoading = createSelector(
    selectChampionMasteryState,
    state => state.loading
);

export const selectQueryData = createSelector(
  selectChampionMasteryState,
  state => state.queryData
);

export const selectChampionMasteryPage = createSelector(
    selectAllChampionMastery,
    (state, props) => {
        const startPos = props.pageNo * props.pageSize;
        const endPos = startPos + props.pageSize;
        return state.slice(startPos, endPos);
    }
);
