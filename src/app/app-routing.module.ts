import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UpcomingMeetupComponent } from './upcoming-meetup/upcoming-meetup.component';
import { PreviousMeetupComponent } from './previous-meetup/previous-meetup.component';

const appRoutes: Routes = [
  {path: '', component: UpcomingMeetupComponent},
  {path: 'archive/:id', component: PreviousMeetupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
