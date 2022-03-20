import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {
 
  constructor(private http: HttpClient) { }

  getCep(cep:string) {
    let url = `https://viacep.com.br/ws/${cep}//json/`
    return this.http.get<String>(url)
  }
}
