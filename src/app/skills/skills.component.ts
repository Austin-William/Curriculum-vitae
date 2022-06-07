import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills_1 = [
    {
      name: 'C',
      level: '60'
    },
    {
      name: 'C++',
      level: '60'
    },
    {
      name: 'Python',
      level: '40'
    },
    {
      name: 'Assembly',
      level: '30'
    },
    {
      name: 'Haskell',
      level: '20'
    },
    {
      name: 'C#',
      level: '40'
    }
  ];

  skills_2 = [
    {
      name: 'Javascript',
      level: '70'
    },
    {
      name: 'HTML 5',
      level: '70'
    },
    {
      name: 'CSS 3',
      level: '80'
    },
    {
      name: 'Flutter (Dart)',
      level: '70'
    },
    {
      name: 'Docker',
      level: '50'
    }    
  ];

}
