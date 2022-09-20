import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {exhaustMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {AccountService} from "libs/shared/services/src/lib/account.service";
import {GET_ACCOUNTS, GetAccountsSuccess, GetAccountFailure} from "./account-actions";
import {Account} from 'libs/shared/models/src/lib/account';

@Injectable()
export class AccountEffects {
  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) {
  }

//get accounts effect
  $effect_get_accounts = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_ACCOUNTS),
      exhaustMap(action =>
        this.accountService.getAccounts().pipe(map((response: Account[]) => {
          return GetAccountsSuccess({
              accounts: response,
              isLoading: false,
              errorMessage: ''
            }
          );
        }),
          catchError((error: any) => of(GetAccountFailure(error))))
      )
    ));
}
