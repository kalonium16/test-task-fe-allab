import { Component, Input, OnInit } from '@angular/core';
import { emptyJob, Job } from 'src/app/types/types';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css'],
})
export class JobListItemComponent implements OnInit {
  @Input() jobItem: Job = emptyJob();
  faLocationDot = faLocationDot;
  faBookmark = faBookmark;
  timePassed = 0;

  constructor() {}

  ngOnInit(): void {
    this.timePassed = Math.floor(
      (new Date().getTime() - new Date(this.jobItem.createdAt).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
  }
}
