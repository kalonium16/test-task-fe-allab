import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobsService } from './services/jobs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private jobs: JobsService) {}
  private subsription: Subscription = new Subscription();
  isLoaded = false;
  ngOnInit(): void {
    this.subsription = this.jobs.fetchJobs().subscribe((res) => {
      if (res) {
        this.isLoaded = true;
      }
    });
  }

  title = 'test-task-fe-allab';

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
  onActivate(event: Event) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
