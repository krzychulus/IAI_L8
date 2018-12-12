import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'mapa',
    component:MapaComponent,

  },
  {
    path:'quiz',
    component:QuizComponent,
  }


];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MapaComponent,
    ContactComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
