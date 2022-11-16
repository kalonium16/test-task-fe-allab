import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Job } from '../types/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit, OnDestroy {
  jobsList: Job[] = [];
  private subsription: Subscription = new Subscription();
  constructor(private jobs: JobsService) {}

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }

  ngOnInit(): void {
    this.subsription = this.jobs.jobsUpdate.subscribe((jobs) => {
      this.jobsList = jobs;
    });
    // this.jobs.fetchJobs().subscribe((res) => {
    //   this.jobs.getJobsByPage();
    // });
    this.jobs.setJobs();
    this.jobs.getJobsByPage();
  }
}
