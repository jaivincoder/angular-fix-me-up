import {createReducer, on} from '@ngrx/store';
import {GetAccountsSuccess} from "./account-actions";
import {AccountState} from "./account";


export const initialState: AccountState = {
  accounts: [{
    id: null,
    balance: null,
    currency: null
  }],
  loading: false,
  errorMessage: null
}

export const accountReducer = createReducer(
  initialState,
  on(GetAccountsSuccess, (state, {accounts, errorMessage, isLoading}) => {
    return {
      ...state,
      accounts,
      isLoading,
      errorMessage
    };
  })
);

export function AccountReducer(state: any, action: any) {
  return accountReducer(state, action);
}
