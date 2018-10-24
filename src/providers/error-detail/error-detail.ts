import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';


@Injectable()
export class ErrorDetailProvider {

  constructor(private http: HttpClient) {
    console.log('Hello ErrorDetailProvider Provider');
  }


public GetDailyErrorList(){
  return new Promise(resolve => {
    this.http.get <ErrorModel>('https://www.mocky.io/v2/5aa410243100003e1d26e314').subscribe(data => {
      console.log("asd",data);  
    }, err => {
      console.log(err);
    });
  });



/*
return  this.http.get<ErrorModel>('https://www.mocky.io/v2/5aa410243100003e1d26e314').subscribe(data => {
    console.log(data);  
    
  }, err => {
    console.log(err);
  });
*/
}}