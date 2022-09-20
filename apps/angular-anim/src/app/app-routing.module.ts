import { AccountSummaryComponent } from '@angular-anim/feature/account-summary';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountDetailsComponent } from './account-details/account-details.component';

// TODO: 2. We've setup these routes and have them on the page but they aren't working


// Jaivin Movaliya's Comment

//here adding path: '**' to redirect to the main page if path does not exist as, In app.component.ts file, a route array is passing with
// path named '/transfers' whose component does not exist in the project

const routes: Routes = [
  { path: '', component: AccountSummaryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account/:id', component: AccountDetailsComponent },
  { path: '404', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
