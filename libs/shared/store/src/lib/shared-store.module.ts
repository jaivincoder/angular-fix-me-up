import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer, userKey } from './+state/user-reducer';
import {AccountEffects} from "./+state/accounts/account-effects";
import {AccountReducer} from "./+state/accounts/account-reducer";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(userKey, userReducer),
    StoreModule.forRoot({accounts: AccountReducer},{
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    EffectsModule.forRoot([AccountEffects]),
  ],
})
export class SharedStoreModule {}
