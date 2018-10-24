import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private doctors = [];
   deneme = [];
   deneme2=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform,private http: HttpClient) {
 
    http.get('https://www.mocky.io/v2/5aa410243100003e1d26e314')
        .subscribe((data) => {
          this.doctors.push(data);
 this.deneme.push(this.doctors[0].errors[0]);
          console.log(this.deneme2);
        });

  }

}
