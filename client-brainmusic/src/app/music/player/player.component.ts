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
  private currentTrack: Music;
  private timeout;




  playTrack() {
    this.audio.play();
    console.log("play");
    this.playing = true;
    this.autoNext()
    this.timeout = setTimeout(() => {
      this.pauseTrack();
      console.log("timeout");
      if (confirm('Ban da nghe 25 phut, ban co muon nghe tiep hay khong?')) {
       this.playTrack();
      }
    }, 5000);

  }


  autoNext(){
    setTimeout(
      () => {
        //Them ham` hien thi vao day tuy ae nhe
        console.log("Timeout" + this.audio.currentTime)
        this.nextTrack()
      }, this.audio.duration*1000 - this.audio.currentTime*1000
    )
  }

  pauseTrack() {
    clearTimeout(this.timeout);
    this.audio.pause();
    console.log("pause");
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
    if (this.trackIndex > this.list.length - 1) {
      this.trackIndex = 0;
    }
    this.currentTrack = this.list[this.trackIndex];
    this.audio.src = this.currentTrack.songUrl;
    this.audio.load();
    setTimeout(() => {
      this.playTrack()
    }, 3000)
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
    this.currentTrack = this.list[this.trackIndex];
    this.audio.load;
    // this.audio.src = this.list[0].songUrl;
    console.log(this.list)
  };


  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  setPlayTime(time: number) {
    this.pauseTrack();
    this.audio.play();
    setTimeout(() => {
      //Them ham` hien thi vao day tuy ae nhe
      this.pauseTrack();
      if (confirm('Ban da nghe ' + time/60/1000  +' phut, ban co muon nghe tiep hay khong?')) {
        this.setPlayTime(time);
      }
      console.log("timeout")
    }, time);
  }
}
