import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './app-dados.component.html',
  styleUrls: ['./app-dados.component.scss']
})
export class AppDadosComponent implements OnInit, OnChanges {

  @Input() cep:any;
  dadosCep: any
  constructor() { }

  ngOnInit(): void {
   
  }
  
  ngOnChanges(changes: SimpleChanges): void {

   this.dadosCep = this.cep?  JSON.parse(this.cep) :  ""
  }

  
}
