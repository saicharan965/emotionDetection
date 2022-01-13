import { AnalyzeService } from './../analyze.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  data: string = "I'm so happy to be born here"

  emotionStorage: any = []
inputData:string = ""

  constructor(private _analze: AnalyzeService) { }

  ngOnInit(): void {
  }



  onGetData(val:any) {
    debugger
    this.inputData = val
    this._analze.getEmotion(this.inputData).subscribe(resp => {
      var x=JSON.stringify(resp)
      this.emotionStorage=JSON.parse(x)

    }
    )
  }

  // onAnalyze(val:any) {
  //   debugger
  //   this.inputData = val
  //   this._analze.getEmotion(this.inputData).subscribe(resp => {
  //     var x=JSON.stringify(resp)
  //     this.emotionStorage=JSON.parse(x)

  //   }
  //   )
  // }

}
