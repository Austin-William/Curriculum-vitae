import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProfilComponent,
    ExperiencesComponent,
    SkillsComponent,
    ActivitiesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
