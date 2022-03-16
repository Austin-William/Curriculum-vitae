import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      name: 'Redditech',
      description: 'A mobile application using Flutter and Reddit API to clone Reddit app.',
      images: [
        {
          url: 'assets/projects/redditech/1.png',
          alt: 'Redditech',
          title: 'Home page'
        },
        {
          url: 'assets/projects/redditech/2.png',
          alt: 'Redditech',
          title: 'Search page'
        },
        {
          url: 'assets/projects/redditech/3.png',
          alt: 'Redditech',
          title: 'Settings page'
        },
        {
          url: 'assets/projects/redditech/4.png',
          alt: 'Redditech',
          title: 'Profile page'
        },
        {
          url: 'assets/projects/redditech/5.png',
          alt: 'Redditech',
          title: 'Preferences page'
        },
      ],
      link: 'https://github.com/Austin-William/Redditech',
    }
  ];

}
