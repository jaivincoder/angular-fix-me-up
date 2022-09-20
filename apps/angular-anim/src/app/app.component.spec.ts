import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {StoreModule} from "@ngrx/store";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}, {}),
      ],
      providers: [provideMockStore()],
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
