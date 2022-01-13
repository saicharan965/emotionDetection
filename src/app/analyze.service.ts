import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AnalyzeService {


  url = "https://text2emotion.azurewebsites.net/emotion?text="




  constructor(private _http: HttpClient) { }

  // postData(data:any) {
  // return  this._http.post('url',data)
  // }

  getEmotion(data:any){
    // debugger;
    var str = this.url + data
   return this._http.get(this.url+ data)
   
  }
}
