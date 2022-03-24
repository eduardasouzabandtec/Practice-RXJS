import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BuscaCepService } from 'src/app/services/busca-cep.service';


@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {
  @Output() clickForm = new EventEmitter();
  cep: string = ''
  dadosCep: string = ''

  constructor(
    private service: BuscaCepService
    ) {
    
   }

  ngOnInit(): void {
  }

  submit(event: SubmitEvent){
    event.preventDefault();
    this.service.getCep(this.cep)
      .subscribe((dados : string) =>  this.emitClick(dados));
  }
  emitClick(dados: string) {
    this.clickForm.emit(dados);
  }

}
 