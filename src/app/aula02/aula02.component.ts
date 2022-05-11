import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula02',
  templateUrl: './aula02.component.html',
  styleUrls: ['./aula02.component.css']
})
export class Aula02Component implements OnInit {

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
