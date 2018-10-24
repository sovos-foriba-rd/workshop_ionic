import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Note } from '../../model/note.model';;
import { NoteListService } from '../../service/note-list.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  noteList: Observable<Note[]>

  constructor(public navCtrl: NavController, private noteListService: NoteListService,public db: AngularFireDatabase) {

    this.noteList = this.noteListService.getNoteList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });


  }
}
