import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  myMethod(){
    console.log('hey wtup');
  }
}
