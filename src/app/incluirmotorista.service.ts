import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Motorista } from './Entidades/Motorista';

@Injectable({
  providedIn: 'root'
})
export class IncluirmotoristaService {

  constructor( private _http:HttpClient) { }
  
  incluirmotorista(motorista: Motorista): Observable<Motorista>{
        return this._http.post<Motorista>("http://localhost:8080/motorista/incluir", motorista)
  }

}
