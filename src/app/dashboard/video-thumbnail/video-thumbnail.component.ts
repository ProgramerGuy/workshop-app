import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from 'src/app/types';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent {

  @Input() video?: Video;

  @Output() selectedVideo = new EventEmitter<Video>();

  constructor() { }

  selectVideo() {
    this.selectedVideo.emit(this.video);
  }

}
