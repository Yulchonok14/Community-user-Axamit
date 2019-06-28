import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'

import { ArchiveService } from '../shared/archive.service';
import { Archive } from '../shared/archive.model';

@Component({
  selector: 'app-previous-meetup',
  templateUrl: './previous-meetup.component.html',
  styleUrls: ['./previous-meetup.component.css']
})
export class PreviousMeetupComponent implements OnInit, OnDestroy {
  chosenArchive: Archive;
  archivePrevNext: any;
  currentId: number;
  subscription: Subscription;

  constructor(private archiveService: ArchiveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.currentId = +params['id'];
        this.getData(+params['id']);
        //this.chosenArchive = this.archiveService.getArchiveById(+params['id']);
        //this.archivePrevNext = this.archiveService.getArchivePrevNext(+params['id']);
      });

    this.subscription = this.archiveService.archiveChanged.
        subscribe(() => {
      this.getData(this.currentId);
    });
  }

  getData(id: number) {
    this.chosenArchive = this.archiveService.getArchiveById(id);
    this.archivePrevNext = this.archiveService.getArchivePrevNext(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
