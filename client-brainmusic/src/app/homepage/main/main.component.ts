import { Component, OnInit } from '@angular/core';
declare function runjs();
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private playing = false;

  constructor() { runjs()
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = 'https://stream.brain.fm/?tkn=1e70ce40-3fc4-11e9-a257-77080ead160f-u999628';

  }

  private audio: any = null;
  playButton() {
    if (this.playing == false) {
      this.playTrack();

    } else {
      this.pauseTrack();
    }
  }

  playTrack() {
    this.audio.play();
    console.log("play");
    this.playing = true;


  }



  pauseTrack() {
    this.audio.pause();
    console.log("pause");
    this.playing = false;
  }
  setVolume(vol) {
    this.audio.volume = vol;
  }


}
