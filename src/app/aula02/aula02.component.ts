import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula02',
  templateUrl: './aula02.component.html',
  styleUrls: ['./aula02.component.css']
})
export class Aula02Component implements OnInit {

  constructor() { }

  nomeParent:string ="Teste";

  ngOnInit(): void {
  }

  aoMudar(evento){
    console.log(evento);
    alert(evento.novoValor);
  }

}
