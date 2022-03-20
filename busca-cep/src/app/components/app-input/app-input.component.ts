import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BuscaCepService } from 'src/app/services/busca-cep.service';


@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {
  @Output() clickForm = new EventEmitter();
  cep: any = '';
  dadosCep: any;

  constructor(private service: BuscaCepService) { }

  ngOnInit(): void {
  }

  submit(event: any) {
    event.preventDefault();
    const obs = this.service.getCep(this.cep)
      .subscribe(dados => this.clickForm.emit(JSON.stringify(dados)));
  }

}
