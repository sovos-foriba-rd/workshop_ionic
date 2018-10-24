import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { NoteListService } from '../../service/note-list.service';
import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-edit-note',
  templateUrl: 'edit-note.html',
})
export class EditNotePage {
 
  note: Note = {
    title: '',
    content: ''
  };
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteListService: NoteListService) {
  }
 
  ionViewDidLoad() {
    this.note = this.navParams.get('note');
  }
 
  updateNote(note: Note) {
    this.noteListService.updateNote(note).then(() => {
      this.navCtrl.push(HomePage);
    })
  }
 
  removeNote(note: Note) {
    this.noteListService.removeNote(note).then(() => {
      this.navCtrl.push(HomePage);
    })
  }
}