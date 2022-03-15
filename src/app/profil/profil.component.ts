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

  description_1 = `Austin-William Lo, étudiant en 4ème année à Epitech pour devenir Expert en Technologie de l'Information après un BAC +5.`
  description_2 = `J’ai appris divers langages de programmations tels que le C, C++, Python, Flutter (Dart) ou le Javascript en passant par de l'Haskell par des petits et gros projets afin d'être prêt à travailler en entreprise. Que ce soit pour des projets personnels ou professionnels, j'ai appris à être autonome, à travailler en équipe et à m'adapter à n'importe quelle situation.`;

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
