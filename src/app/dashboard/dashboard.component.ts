import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Video } from '../types';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  videos: Video[];
  video: Video;

  constructor(http: HttpClient) {
    http
      .get<Video[]>(apiUrl + '/videos')
      .subscribe(videos => (this.videos = videos));
  }

  videoSelected(vid) {
    this.video = vid;
  }
}
