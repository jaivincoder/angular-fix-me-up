/**
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
 */
import {Component, OnInit} from '@angular/core';
import {Account} from '@angular-anim/shared/models';
import {AccountService} from '@angular-anim/shared/services';
import {Observable, of, ReplaySubject, takeUntil} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {AccountFacade} from "@angular-anim/shared/store";

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  accounts: Account[] = [];
  currencies: string[] = ['cad', 'usd'];
  defaultAccountType: string = '';
  accountType: FormGroup;
  filteredAccountList: Account[] = [];

  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private accountService: AccountService, private accountFacade: AccountFacade) {
    this.accountType = new FormGroup({
      currency: new FormControl('')
    });
    this.accountType.controls['currency'].setValue(this.defaultAccountType, {onlySelf: true});
  }

  ngOnInit(): void {
    this.accountFacade.getAccountDispatch();
    this.accountFacade.getAccounts().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((data: Account[]) => {
      if(data?.length> 0) {
          this.accounts = data;
          this.filterAccounts()
      }
    });
  }

  filterAccounts(): void {
    const accountsFilter = this.accountType.controls['currency'].value;
    this.filteredAccountList = this.accounts.filter(acc => acc.currency === accountsFilter || accountsFilter === '');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
