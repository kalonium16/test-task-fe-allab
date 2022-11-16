import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { JobListItemComponent } from './job-list/job-list-item/job-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobDetailedComponent } from './job-list/job-detailed/job-detailed.component';

@NgModule({
  declarations: [AppComponent, JobListComponent, JobListItemComponent, JobDetailedComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
