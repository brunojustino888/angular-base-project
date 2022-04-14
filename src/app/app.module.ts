import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppComponent } from './app.component';

import { Aula02Module } from './aula02/aula02.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    Aula02Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
