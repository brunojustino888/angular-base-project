import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.css']
})
export class Aula01Component implements OnInit {

  btnClickOk:boolean=false;

  valorsalvo:string="";

  @Input() nome:string = ""; 

  pessoa:any = {
    idade: 33,
    nome:"Bruno"
  }

  constructor() { }

  ngOnInit(): void {
  }

  exibeStatus(){
    if(this.btnClickOk){
      this.btnClickOk=false;
    }else{
      this.btnClickOk=true;
    }
    alert(this.btnClickOk);  
  }

  onTecladoKeyUp(evento:Event){
    console.log('Valor do elemento: '+(<HTMLInputElement>evento.target).value);
  }

  ontecladokeyup(valorinput:HTMLInputElement){
    console.log(valorinput.value);
  }

  salvar(evento:Event){
    this.valorsalvo = (<HTMLInputElement>evento.target).value;
    alert('Valor salvo: '+(<HTMLInputElement>evento.target).value);
    console.log('Valor salvo: '+(<HTMLInputElement>evento.target).value);
  }

}
