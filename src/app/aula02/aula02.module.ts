import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Aula02Component } from './aula02.component';
import { Aula02filhoComponent } from './aula02filho/aula02filho.component';
import { Aula03Component } from '../aula03/aula03.component';



@NgModule({
  declarations: [
    Aula02Component,
    Aula02filhoComponent,
    Aula03Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Aula02Component,
    Aula02filhoComponent
  ]
})
export class Aula02Module { }
