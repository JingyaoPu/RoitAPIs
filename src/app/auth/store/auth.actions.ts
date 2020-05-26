import { createAction, props, Action } from '@ngrx/store';
import { User } from '../user.model'

export const loginStart = createAction(
  '[Auth] Login Start',
  props<{ email: string; password: string }>()
)

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<User>()
)



