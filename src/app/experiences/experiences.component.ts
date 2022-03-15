import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences = [
    {
      title: 'Student',
      description: `Currently a 4th year student at Epitech to become an Information Technology Expert.`,
      technologies: [
        {
          name: 'C',
          image: 'assets/logos/c-logo.png'
        },
        {
          name: 'C++',
          image: 'assets/logos/cpp-logo.png'
        },
        {
          name: 'Javascript',
          image: 'assets/logos/js-logo.png'
        },
        {
          name: 'Haskell',
          image: 'assets/logos/haskell-logo.png'
        },
        {
          name: 'Python',
          image: 'assets/logos/python-logo.png'
        },
        {
          name: 'Bash',
          image: 'assets/logos/bash-logo.png'
        },
        {
          name: 'HTML',
          image: 'assets/logos/html-logo.png'
        },
        {
          name: 'CSS',
          image: 'assets/logos/css-logo.png'
        },
        {
          name: 'Flutter',
          image: 'assets/logos/flutter-logo.png'
        },
      ],
      company: 'Epitech',
      logo: 'assets/logos/epitech-logo.png',
      date: '2019-2024',
    },
    {
      title: 'CV Generator',
      description: `Internship to start my 2nd year at Epitech and have a first professional experience. The internship consisted in developing an online CV generator specific to their specifications for prestataires. The generator was developed in ReactJS and used a basic API to fetch data from Linagora API. Writing documentation for the application and users were part of my missions. As a bonus, I was able to explore the backend side of the app with Nginx to connect the app to their database.`,
      technologies: [
        {
          name: 'React',
          image: 'assets/logos/react-logo.png'
        },
        {
          name: 'NodeJS',
          image: 'assets/logos/nodejs-logo.png'
        },
        {
          name: 'Nginx',
          image: 'assets/logos/nginx-logo.png'
        },
        {
          name: 'Firebase',
          image: 'assets/logos/firebase-logo.png'
        },
      ],
      company: 'Linagora',
      logo: 'assets/logos/Linagora-logo.png',
      date: '4 months - September 2020',
    }
  ]

}
