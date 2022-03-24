import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() values :any;
  cepzinho:string = '';


  onForm(dados:any){
    this.cepzinho = dados;
  }
}
