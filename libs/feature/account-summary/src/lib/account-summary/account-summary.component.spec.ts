import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { AccountSummaryComponent } from './account-summary.component';
import {AccountFacade, SharedStoreModule} from "@angular-anim/shared/store";

// TODO: 9. Topics in this file: Angular Unit Testing w/ Jest
fdescribe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountSummaryComponent],
      imports: [SharedStoreModule],
      providers: [
        {provide: AccountFacade }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("#filterAccounts", () => {
    it('should return filter accounts',() => {
      // TODO: 10. this test isn't doing anything atm, how can we make it more meaningful?
      component.accounts = [{id:'id', balance: 23, currency:'CAD'}];
      component.filterAccounts();
      expect(component.filteredAccountList.length).toBeGreaterThan(0);
    });
  });
});
