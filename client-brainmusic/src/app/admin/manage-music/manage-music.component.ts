import {Component, OnInit} from '@angular/core';
import {Music} from '../../shared/music.model';
import {NgForm} from '@angular/forms';
import {MusiclistService} from '../../shared/musiclist.service';

@Component({
  selector: 'app-manage-music',
  templateUrl: './manage-music.component.html',
  styleUrls: ['./manage-music.component.css']
})
export class ManageMusicComponent implements OnInit {


  formData: Music;
  private readonly API;

  constructor(private service: MusiclistService,
  ) {
  }


  ngOnInit() {
    this.service.refreshList();
    console.log(this.service.formData)
    // @ts-ignore
    this.resetForm();

  }


  populateForm(song: Music) {
    this.service.formData = Object.assign({}, song);
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      name: '',
      imageUrl: '',
      songUrl: '',
      category: '',
    };
  };


  onSubmit(form : NgForm
  ) {
    console.log(form.value);


    if (form.value.id == null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }

  }

  insertRecord(form
                 :
                 NgForm
  ) {


    this.service.postSong(form.value).subscribe(res => {
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form
                 :
                 NgForm
  ) {
    if (confirm('Are you sure to do update this song')) {
      this.service.putSong(form.value).subscribe(res => {
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  }

  onDelete(id
             :
             number
  ) {
    if (confirm('Are you sure to do delete this record')) {
      this.service.deleteSong(id).subscribe(res => {
        this.service.refreshList();
      });
    }
  }

}
