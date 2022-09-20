import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {  Observable } from "rxjs";
import {AccountState} from "./account";
import {accountSelector} from "./account-selectors";
import {Account} from "../../../../../models/src/lib/account";
import {GetAccounts} from "./account-actions";

@Injectable({
  providedIn: 'root'
})
export class AccountFacade {
  constructor(private store: Store<AccountState>) {
  }

  //getting the accounts from state
  getAccounts(): Observable<Account[]> {
    return this.store.pipe(
      select(accountSelector.selectAccountState)
    );
  }

  //dispatching the accounts
  getAccountDispatch(): void {
    return this.store.dispatch(GetAccounts({isLoading: true, errorMessage: ''}));
  }
}
