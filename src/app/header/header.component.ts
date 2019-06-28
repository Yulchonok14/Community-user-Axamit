import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ArchiveService } from '../shared/archive.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeRus = true;
  archiveNames = [];

  constructor(private archiveService: ArchiveService, private translate: TranslateService) {
    translate.setDefaultLang('ru');
  }

  switchLanguage(language: string) {
    this.activeRus = language === 'ru';
    this.translate.use(language);
    this.archiveService.updateArchive(language);
    this.archiveNames = this.archiveService.getArchivesNames().reverse();
  }

  ngOnInit() {
    this.archiveNames = this.archiveService.getArchivesNames().reverse();
  }

}
