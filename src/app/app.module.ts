import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Aula00Module } from './aula00/aula00.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Aula00Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
