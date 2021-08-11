import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorista } from './Entidades/Motorista';

@Injectable({
  providedIn: 'root'
})
export class ListarmotoristaService {

  constructor(private _http:HttpClient) { }

  listarmotorista(): Observable<any>{

    return this._http.get<Motorista[]>("http://localhost:8080/motorista/listar");

  }
}
