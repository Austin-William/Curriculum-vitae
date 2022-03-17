import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activities = [
    {
      name: 'Sports',
      image: 'assets/images/badminton.jpg',
    },
    {
      name: 'Video Games',
      image: 'assets/images/gaming.jpg',
    },
    {
      name: 'Video Montages',
      image: 'assets/images/video_montage.jpg',
    },
    {
      name: 'Coding',
      image: 'assets/images/coding.png',
    },
    {
      name: 'Chilling',
      image: 'assets/images/carafonc.png',
    }
  ];

}
