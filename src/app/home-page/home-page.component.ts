import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  menuIcons:any= [
    {
      "iconName":"cached",
      "iconDesc":"Rerun"
    },
    {
      "iconName":"settings",
      "iconDesc":"settings"
    },
    {
      "iconName":"cleaning_services",
      "iconDesc":"Clear cache"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
