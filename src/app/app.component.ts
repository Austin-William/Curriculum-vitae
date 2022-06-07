import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
  }

  ngOnInit() {
    AOS.init();
  }

  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  title = 'cv-austin';
}
