import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailedComponent } from './job-list/job-detailed/job-detailed.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  {
    path: 'jobs/:id',
    component: JobListComponent,
  },
  { path: '', redirectTo: '/jobs/1', pathMatch: 'full' },
  {
    path: 'job/:id',
    component: JobDetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
