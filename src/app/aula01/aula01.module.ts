import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula01Component } from './aula01.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Aula01Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Aula01Component
  ]
})
export class Aula00Module { }
