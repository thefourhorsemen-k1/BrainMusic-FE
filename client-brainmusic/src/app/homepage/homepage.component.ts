import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  constructor() {
  }

  audio: any;

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = 'https://stream.brain.fm/?tkn=1e70ce40-3fc4-11e9-a257-77080ead160f-u999628';
  }

  setVolume(vol) {
    this.audio.volume = vol;
  }

  playTrack() {
    this.audio.play();
    console.log('play');
  }

  pauseTrack() {
    this.audio.pause();
    console.log('pause');
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}


