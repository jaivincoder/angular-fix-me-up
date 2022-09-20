import {AccountState} from "./account";
import {createFeatureSelector, createSelector} from "@ngrx/store";

const getAccountState = createFeatureSelector<AccountState>('accounts');

const selectAccountState = createSelector(
  getAccountState,
  (state: AccountState) => {
    return state?.accounts
  }
);

export const accountSelector = {
 getAccountState,
  selectAccountState
};
