import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emptyJob, Job } from '../types/types';
import { BehaviorSubject, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class JobsService {
  jobsList: Job[] = [];
  jobsUpdate: BehaviorSubject<Job[]> = new BehaviorSubject([] as Job[]);
  constructor(private http: HttpClient) {}
  bearerToken = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';

  fetchJobs() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.bearerToken}`,
      }),
    };

    return this.http
      .get<Job[]>(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
        httpOptions
      )
      .pipe(
        map((res) => {
          this.jobsList = res;
          return res;
        })
      );
  }

  // setJobs() {
  //   for (let i = 0; i < 20; i++) {
  //     this.jobsList.push(emptyJob());
  //   }
  // }

  getJobsByPage(page = 1) {
    console.log(this.jobsList.slice(15 * (page - 1), 15 * page));
    return this.jobsList.slice(15 * (page - 1), 15 * page);
  }

  getJobById(id: string) {
    return this.jobsList.filter((el) => {
      if (el.id == id) {
        return true;
      } else return false;
    });
  }

  getMaxJobs() {
    return this.jobsList.length;
  }
}
