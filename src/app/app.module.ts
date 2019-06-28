import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpcomingMeetupComponent } from './upcoming-meetup/upcoming-meetup.component';
import { PreviousMeetupComponent } from './previous-meetup/previous-meetup.component';
import { SpeakerItemComponent } from './previous-meetup/speaker-item/speaker-item.component';
import { RegistrationFormComponent } from './upcoming-meetup/registration-form/registration-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ArchiveService } from './shared/archive.service';
import { SpeakerService } from './shared/speaker.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UpcomingMeetupComponent,
    PreviousMeetupComponent,
    SpeakerItemComponent,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ArchiveService, SpeakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
