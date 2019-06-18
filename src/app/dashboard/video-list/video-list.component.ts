import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent {
  @Input() videos?: Video[];
  selectedVideo: Video | undefined;

  @Output() videoSelected = new EventEmitter<Video>();

  selectedItem(video) {
    this.selectedVideo = video;
    this.videoSelected.emit(video);
  }
}
