import {createAction, props} from '@ngrx/store';
import {Account} from 'libs/shared/models/src/lib/account';

//account actions

export const GET_ACCOUNTS = '[Account] Get Account';
export const GET_ACCOUNTS_SUCCESS = '[Account] Get Account Success';
export const GET_ACCOUNTS_FAILURE = '[Account] Get Account Failure';

export const GetAccounts = createAction(
  GET_ACCOUNTS, props<{ isLoading: boolean, errorMessage: string}>()
);

export const GetAccountsSuccess = createAction(
  GET_ACCOUNTS_SUCCESS,  props<{ accounts: Account[],isLoading: boolean, errorMessage: string}>()
);

export const GetAccountFailure = createAction(
  GET_ACCOUNTS_FAILURE,  props<{message: string}>()
);

