import { Component, OnInit, Input } from '@angular/core';

import { Speaker } from '../../shared/speaker.model';

@Component({
  selector: 'app-speaker-item',
  templateUrl: './speaker-item.component.html',
  styleUrls: ['./speaker-item.component.css']
})
export class SpeakerItemComponent implements OnInit {
  @Input() speakerItem: Speaker;
  constructor() { }

  ngOnInit() {
  }

}
