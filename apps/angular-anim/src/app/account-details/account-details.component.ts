import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReplaySubject, Subscription, takeUntil} from "rxjs";
import {Account} from "libs/shared/models/src/lib/account";
import {AccountService} from '@angular-anim/shared/services';
import {AccountFacade} from "@angular-anim/shared/store";

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {
  subscriptions!: Subscription;
  id: string | null = null;
  accounts: Account[] = [];
  account: Account | null  = null;

  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute,
              private accountService: AccountService, private accountFacade: AccountFacade ) {}



  /*
  * getting the id from the url
  * */
  public ngOnInit(): void {
  this.subscriptions = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
          this.getAccountDetails();
      }
    });
  }

/*
* Getting Account details using store
* */
  public getAccountDetails(): void {
    this.accountFacade.getAccountDispatch();
    this.accountFacade.getAccounts().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      if(data?.length> 0) {
        this.getAccount(data);
      }
    });
  }

  /*
* finding detail where  an id is matched
* @param {Array} accounts This id an array of all account details
* @return {Object}  return an object of the specific id
* */
  public getAccount(accounts: Account[]): void {
    this.account = accounts.find((data: Account) => data.id === this.id) || null;
  }

  /*
*  Destroying subscriptions
* */
  public ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    this.subscriptions.unsubscribe();
  }
}
