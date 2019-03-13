import {Component, OnInit} from '@angular/core';
import {MusiclistService} from "./shared/musiclist.service";
import {Music} from "./shared/music.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client-brainmusic';
 constructor(private service: MusiclistService){
 }

  ngOnInit() {
    this.service.refreshList();
    console.log("app")

  }


}
