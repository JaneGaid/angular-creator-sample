import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SurveyCreatorAngularModule } from "survey-creator-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, SurveyCreatorAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
