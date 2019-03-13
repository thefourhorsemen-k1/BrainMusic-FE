import {Component, OnInit} from '@angular/core';
import {MusiclistService} from '../../shared/musiclist.service';
import {Music} from '../../shared/music.model';

declare function runjs(): any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  formData: Music;

  constructor(
    private service: MusiclistService
  ) {
     this.currentTrack = this.track[this.trackIndex];
    this.trackIndex = 0;

  }

  private audio: any = null;
  private playing = false;
  private trackIndex = 0;
  private track: Music[] = this.service.list;

  private currentTrack: Music;
  panelOpenState = false;

  playTrack() {
    this.audio.play();
    this.playing = true;

  }

  pauseTrack() {
    this.audio.pause();
    this.playing = false;
  }

  stopTrack() {
    this.audio.pause();
    this.playing = false;
    this.audio.currentTime = 0;
  }

  nextTrack() {
    this.stopTrack();
    this.trackIndex++;
    if (this.trackIndex > this.track.length) {
      this.trackIndex = 0;
    }
    this.currentTrack = this.track[this.trackIndex];
    this.audio.src = this.currentTrack.songUrl;
    this.audio.load();
    this.playTrack();
  }

  previousTrack() {
    this.stopTrack();
    this.trackIndex--;
    if (this.trackIndex < 0) {
      this.trackIndex = this.track.length - 1;
    }
    this.currentTrack = this.track[this.trackIndex];
    this.audio.src = this.currentTrack.songUrl;
    this.audio.load();
    this.playTrack();
  }

  setTrack(track: Music) {
    this.stopTrack();
    this.trackIndex = track.id;
    this.currentTrack = this.track[track.id];
    this.audio.src = this.currentTrack.songUrl;
    this.audio.load();
    this.playTrack();
  }

  setVolume(vol) {
    this.audio.volume = vol;
  }

  setProgress(prog) {
    this.audio.currentTime = prog;
  }

  ngOnInit() {

     this.audio = new Audio();

    this.audio.src = this.currentTrack.songUrl;

  }


  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

}
