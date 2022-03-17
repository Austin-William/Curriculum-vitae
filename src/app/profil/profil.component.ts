import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  constructor() { }

  ngOnInit() {
  }

  about = `About`;
  me = `me`;

  description_1 = `Austin-William Lo, 4th year student at Epitech to become an Expert in Information Technology after a BAC +5.`
  description_2 = `I learned various programming languages ​​such as C, C++, Python, Flutter (Dart) or Javascript through Haskell through small and large projects in order to be ready to work in a company. Whether for personal or professional projects, I learned to be independent, to work in a team and to adapt to any situation.`;
  description_3 = `i'm searching for a job in the web development field.`;
  ready_text = `Ready to work !`;

  profiles = [
    {
      status: '✔',
      description: 'Web'
    },
    {
      status: '✔',
      description: 'Mobile'
    },
    {
      status: '✔',
      description: 'Open minded'
    },
  ]
}
