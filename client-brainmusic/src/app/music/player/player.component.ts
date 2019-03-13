import {Component, OnInit} from '@angular/core';
import {MusiclistService} from '../../shared/musiclist.service';
import {Music} from '../../shared/music.model';
import {NgForm} from "@angular/forms";

declare function runjs(): any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  formData: Music;
  list: Music[];

  constructor(
    private service: MusiclistService
  ) {
    this.trackIndex = 0;

  }

  private audio: any = null;
  private playing = false;
  private trackIndex = 0;
  private track: Music[] = this.service.list;

  private currentTrack: Music

  playTrack() {
    this.audio.play();
    this.playing = true;
    setTimeout(() => {
      //Them ham` hien thi vao day tuy ae nhe
      alert("Ban hay nghi ngoi 5 phut truoc khi nghe tiep")
      console.log("timeout")
    }, 1500000);
    console.log(this.audio.duration)
    // setTimeout(
    //   () => {
    //     //Them ham` hien thi vao day tuy ae nhe
    //     this.nextTrack()
    //     console.log("timeout")
    //   }, 5000
    // )
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
    if (this.trackIndex > this.list.length) {
      this.trackIndex = 0;
      this.playTrack();
    }
    this.currentTrack = this.list[this.trackIndex];
    this.audio.src = this.currentTrack.songUrl;
    this.audio.load();
    this.playTrack();
  }

  previousTrack() {
    this.stopTrack();
    this.trackIndex--;
    if (this.trackIndex < 0) {
      this.trackIndex = this.list.length - 1;
    }
    this.currentTrack = this.list[this.trackIndex];
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
    this.list = this.track;
    this.audio = new Audio();
    this.currentTrack = this.list[this.trackIndex];

    this.audio.src = this.list[0].songUrl;

    console.log("track: " + this.track)
    console.log("list: " + this.list)
  }


  onChangeSongs(category: string) {
    this.list = [];
    for (let i = 0; i < this.track.length; i++) {
      if (this.track[i].category == category) {
        this.list.push(this.track[i]);
      }
    }
    ;
    this.audio.src = this.list[0].songUrl;
    console.log(this.list)
  };


  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  setTime(time: number) {
    setTimeout(() => {
      //Them ham` hien thi vao day tuy ae nhe
      this.pauseTrack();
      console.log("timeout")
    }, time);
  }
}
