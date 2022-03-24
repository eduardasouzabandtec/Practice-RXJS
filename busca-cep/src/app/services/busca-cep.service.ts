import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class BuscaCepService {
 
  constructor(private http: HttpClient) { }

  getCep(cep:string): Observable<string>{
    const URL = `https://viacep.com.br/ws/${cep}//json/`
    return this.http.get<string>(URL)
  }
}
