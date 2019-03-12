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
  constructor(private service: MusiclistService,
  ) {
  }

  ngOnInit() {
    this.service.refreshList();
    runjs();
  }

  populateForm(song: Music) {
    this.service.formData = Object.assign({}, song);
  }

}
