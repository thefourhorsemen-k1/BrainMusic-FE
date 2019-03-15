import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../shared/feedback.service';
import {MatDialog} from '@angular/material';
import {FeedbackComponent} from '../user/feedback/feedback.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public service: FeedbackService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = 'https://stream.brain.fm/?tkn=1e70ce40-3fc4-11e9-a257-77080ead160f-u999628'
  }

  private audio: any;

  setVolume(vol) {
    this.audio.volume = vol;
  }

  playTrack() {
    this.audio.play();
    console.log("play");
  }

  pauseTrack() {
    this.audio.pause();
    console.log("pause");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      maxWidth: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}


