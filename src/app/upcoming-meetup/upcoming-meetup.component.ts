import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { ArchiveService } from '../shared/archive.service';
import { Archive } from '../shared/archive.model';

@Component({
  selector: 'app-upcoming-meetup',
  templateUrl: './upcoming-meetup.component.html',
  styleUrls: ['./upcoming-meetup.component.css']
})
export class UpcomingMeetupComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  meetupName = 'Meetup #13';
  meetupDate = '20 февраля';
  meetupTime = '18.00';
  meetupShortPlace = 'Imaguru';
  meetupFullPlace = 'Бизнес-клуб Imaguru,';
  meetupLocation = 'ул. Фабрициуса, 4 (ст. м. Институт Культуры)';
  meetupDescr = `На прошлых митапах, кроме AEM, мы иногда касались других продуктов платформы Adobe Experience Cloud. В 2019 мы будем говорить о них больше. Поэтому приняли решение переименовать сообщество в Adobe Community.
    <br>На встрече 20 февраля мы дадим обзор двум маркетинговым инструментам: Adobe Campaign и Adobe Analytics. А во втором докладе расскажем на реальном кейсе, как их “подружить”`;

  upcomingMeetup: Archive;
  index: number;

  constructor(private archiveService: ArchiveService) { }

  ngOnInit() {
    this.upcomingMeetup = this.archiveService.getUpcomingMeetup();

    this.subscription = this.archiveService.archiveChanged.
    subscribe(() => {
      this.upcomingMeetup = this.archiveService.getUpcomingMeetup();
    });
  }

  getShortDate() {
    const index = this.upcomingMeetup.date.indexOf(',');
    return this.upcomingMeetup.date.slice(0, index);
  }

  getPlace() {
    this.index = this.upcomingMeetup.fullLocation.indexOf(',');
    return this.upcomingMeetup.fullLocation.slice(0, this.index+1);
  }

  getAddress() {
    return this.upcomingMeetup.fullLocation.slice(this.index+1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
