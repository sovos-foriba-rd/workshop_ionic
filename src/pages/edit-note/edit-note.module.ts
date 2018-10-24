import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditNotePage } from './edit-note';

@NgModule({
  declarations: [
    EditNotePage,
  ],
  imports: [
    IonicPageModule.forChild(EditNotePage),
  ],
})
export class EditNotePageModule {}
