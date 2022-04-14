import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aula02filho',
  templateUrl: './aula02filho.component.html',
  styleUrls: ['./aula02filho.component.css']
})
export class Aula02filhoComponent implements OnInit {

  @Input() nome:string ="";

  valorContador:number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.nome);
  }

  diminui(){
    this.valorContador--;
    this.mudouValor.emit({
      novoValor:this.valorContador
    });
  }

  aumenta(){
    this.valorContador++;
    this.mudouValor.emit({
      novoValor:this.valorContador
    });
  }

}
