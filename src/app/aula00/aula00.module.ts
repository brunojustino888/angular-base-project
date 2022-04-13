import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula00Component } from './aula00.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Aula00Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Aula00Component
  ]
})
export class Aula00Module { }
