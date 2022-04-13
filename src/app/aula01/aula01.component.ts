import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula01',
  templateUrl: './aula01.component.html',
  styleUrls: ['./aula01.component.css']
})
export class Aula01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nomeDoFrameWork:string = "Angular";

}
