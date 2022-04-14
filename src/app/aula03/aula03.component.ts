import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula03',
  templateUrl: './aula03.component.html',
  styleUrls: ['./aula03.component.css']
})
export class Aula03Component implements OnInit {

  @ViewChild('contadorFinal') contadorFinal: ElementRef;
  
  valorContador:number=0;

  constructor() { }

  ngOnInit(): void { }

  diminui(){
    console.log(this.contadorFinal);
    console.log(this.contadorFinal.nativeElement.value);
    this.valorContador--;
  }

  aumenta(){
    console.log(this.contadorFinal);
    console.log(this.contadorFinal.nativeElement.value);
    this.valorContador++;
  }

}
