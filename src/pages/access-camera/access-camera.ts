import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-access-camera',
  templateUrl: 'access-camera.html',
})
export class AccessCameraPage {
  myphoto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }
  takephoto() {
    const options: CameraOptions = {
      quality: 70,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
      const pictures = storage().ref(Date.now().toString());
      pictures.putString(this.myphoto, 'data_url');
    }, (err) => {
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessCameraPage');
  }
}
