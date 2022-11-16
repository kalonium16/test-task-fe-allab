import { Component, OnInit } from '@angular/core';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private jobs: JobsService) {}

  ngOnInit(): void {
    this.jobs.setJobs();
  }
  title = 'test-task-fe-allab';
}
