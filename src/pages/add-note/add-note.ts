import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../model/note.model';
import { NoteListService } from '../../service/note-list.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

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
    console.log('ionViewDidLoad AddNotePage');
  }
 
  addNote(note: Note) {
    this.noteListService.addNote(note).then(ref => {
      this.navCtrl.push(HomePage);

    })
  }
}
