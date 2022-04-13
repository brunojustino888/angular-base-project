import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Aula01Module } from './aula01/aula01.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Aula01Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
