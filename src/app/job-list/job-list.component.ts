import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../types/types';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobsList: Job[] = [];
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  currentPage = 1;
  lastPage = 1;
  numbers: number[] = [];
  constructor(
    private jobs: JobsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.currentPage = param['id'];
    });
    this.lastPage = Math.ceil(this.jobs.getMaxJobs() / 15);
    for (let index = 1; index < this.lastPage; index++) {
      this.numbers.push(index);
    }

    this.jobsList = this.jobs.getJobsByPage(this.currentPage);
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }
  GetActiveLinkStyle(page: number) {
    return 'font-bold';
  }

  public pageDown(event: Event) {
    if (this.currentPage > 1) {
      this.router.navigate(['jobs', this.currentPage - 1]);
    }
  }

  public pageUp(event: Event) {
    if (this.lastPage > this.currentPage) {
      this.router.navigate(['jobs', +this.currentPage + 1]);
    }
  }
}
