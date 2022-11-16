import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  faBookmark,
  faShareSquare,
  faStar,
} from '@fortawesome/free-regular-svg-icons';
import {
  faLocationDot,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { JobsService } from 'src/app/services/jobs.service';
import { emptyJob } from 'src/app/types/types';

@Component({
  selector: 'app-job-detailed',
  templateUrl: './job-detailed.component.html',
  styleUrls: ['./job-detailed.component.css'],
})
export class JobDetailedComponent implements OnInit {
  selectedId: string = '0';
  job = emptyJob();
  faBookmark = faBookmark;
  faShare = faShareSquare;
  faStar = faStar;
  faLocationDot = faLocationDot;
  faChevronLeft = faChevronLeft;
  timePassed = 0;
  constructor(private route: ActivatedRoute, private jobs: JobsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.selectedId = param['id'];
    });
    this.job = this.jobs.getJobById(this.selectedId)[0];
    this.timePassed = Math.floor(
      (new Date().getTime() - new Date(this.job.createdAt).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
    this.job.description.replace('\n', '<br>');
  }
}
