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
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      maxWidth: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


