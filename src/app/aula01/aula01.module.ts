import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula01Component } from './aula01.component'; 
import { Aula00Module } from '../aula00/aula00.module';



@NgModule({
  declarations: [
    Aula01Component
  ],
  imports: [
    Aula00Module,
    CommonModule
  ],
  exports:[
    Aula01Component
  ]
})
export class Aula01Module { }
