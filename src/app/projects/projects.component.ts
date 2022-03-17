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
    },
    {
      name: 'Dashboard',
      description: 'A web application using React and Firebase to manage 6 different API.',
      images: [
        {
          url: 'assets/projects/dashboard/1.png',
          alt: 'Dashboard',
          title: 'Home page'
        },
        {
          url: 'assets/projects/dashboard/2.png',
          alt: 'Dashboard',
          title: 'Register page'
        },
        {
          url: 'assets/projects/dashboard/3.png',
          alt: 'Dashboard',
          title: 'Login page'
        },
        {
          url: 'assets/projects/dashboard/4.png',
          alt: 'Dashboard',
          title: 'Twitter & Reddit API'
        },
        {
          url: 'assets/projects/dashboard/5.png',
          alt: 'Dashboard',
          title: 'Youtube API'
        },
        {
          url: 'assets/projects/dashboard/6.png',
          alt: 'Dashboard',
          title: 'Weather API'
        },
        {
          url: 'assets/projects/dashboard/7.png',
          alt: 'Dashboard',
          title: 'Github API'
        },
        {
          url: 'assets/projects/dashboard/8.png',
          alt: 'Dashboard',
          title: 'Unsplash API'
        },
      ],
      link: 'https://github.com/Austin-William/Dashboard-API',
    },
    {
      name: 'Area',
      description: 'An end-year project using React, Flutter and Firebase to create a full automation system accessible with browser and mobile.',
      images: [
        {
          url: 'assets/projects/area/1.PNG',
          alt: 'Area',
          title: 'Web home page'
        },
        {
          url: 'assets/projects/area/2.PNG',
          alt: 'Area',
          title: 'Web home page'
        },
        {
          url: 'assets/projects/area/3.PNG',
          alt: 'Area',
          title: 'Web service presentation page'
        },
        {
          url: 'assets/projects/area/4.PNG',
          alt: 'Area',
          title: 'Web service presentation page'
        },
        {
          url: 'assets/projects/area/5.PNG',
          alt: 'Area',
          title: 'Web contact presentation page'
        },
        {
          url: 'assets/projects/area/6.PNG',
          alt: 'Area',
          title: 'Web contact presentation page'
        },
        {
          url: 'assets/projects/area/7.PNG',
          alt: 'Area',
          title: 'Web purpose presentation page'
        },
        {
          url: 'assets/projects/area/8.PNG',
          alt: 'Area',
          title: 'Web purpose presentation page'
        },
        {
          url: 'assets/projects/area/9.PNG',
          alt: 'Area',
          title: 'Web login page'
        },
        {
          url: 'assets/projects/area/10.PNG',
          alt: 'Area',
          title: 'Web register page'
        },
        {
          url: 'assets/projects/area/11.PNG',
          alt: 'Area',
          title: 'Dashboard page'
        },
        {
          url: 'assets/projects/area/12.PNG',
          alt: 'Area',
          title: 'Dashboard API page'
        },
        {
          url: 'assets/projects/area/13.PNG',
          alt: 'Area',
          title: 'Dashboard Actions/Reactions page'
        },
        {
          url: 'assets/projects/area/14.PNG',
          alt: 'Area',
          title: 'Dashboard notifications page'
        },
        {
          url: 'assets/projects/area/15.PNG',
          alt: 'Area',
          title: 'Dashboard settings page'
        },
        {
          url: 'assets/projects/area/16.PNG',
          alt: 'Area',
          title: 'Mobile login page'
        },
        {
          url: 'assets/projects/area/17.PNG',
          alt: 'Area',
          title: 'Mobile register page'
        },
        {
          url: 'assets/projects/area/18.PNG',
          alt: 'Area',
          title: 'Mobile dashboard page'
        },
        {
          url: 'assets/projects/area/19.PNG',
          alt: 'Area',
          title: 'Mobile drawer'
        },
        {
          url: 'assets/projects/area/20.PNG',
          alt: 'Area',
          title: 'Mobile Notifications page'
        },
        {
          url: 'assets/projects/area/21.PNG',
          alt: 'Area',
          title: 'Mobile API page'
        },
        {
          url: 'assets/projects/area/22.PNG',
          alt: 'Area',
          title: 'Mobile Actions/Reactions page'
        },
        {
          url: 'assets/projects/area/23.PNG',
          alt: 'Area',
          title: 'Mobile Settings page'
        },
      ],
      link: 'https://github.com/Austin-William/Area',
    },
  ];

}
