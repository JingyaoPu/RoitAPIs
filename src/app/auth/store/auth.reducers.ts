import { User } from '../user.model';
import * as FromAuthActions from './auth.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, State, Action } from '@ngrx/store';
import { adaptor } from 'src/app/champion-mastery/store/champion-mastery.reducer';

// tslint:disable-next-line:class-name
export interface userState {
    user: User;
    authError: string;
    loading: boolean;
}

export const initialState: userState = {
    user: null,
    authError: null,
    loading: false
};

const AuthReducer = createReducer(
    initialState,
    on(FromAuthActions.loginSuccess, (state, user) => ({...state, user}))
);

export function reducer(state: userState | undefined, action: Action) {
    return AuthReducer(state, action);
  }
