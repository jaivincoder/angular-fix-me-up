import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountDetailsComponent } from './account-details.component';
import {AppComponent} from "../app.component";
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";
import {provideMockStore} from "@ngrx/store/testing";

describe('AccountDetailsComponent', () => {
  let component: AccountDetailsComponent;
  let fixture: ComponentFixture<AccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailsComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}, {}),
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
