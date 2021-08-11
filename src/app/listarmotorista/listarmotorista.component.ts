import { Component, OnInit } from '@angular/core';
import { Motorista } from '../Entidades/Motorista';
import { ListarmotoristaService } from '../listarmotorista.service';

@Component({
  selector: 'app-listarmotorista',
  templateUrl: './listarmotorista.component.html',
  styleUrls: ['./listarmotorista.component.css']
})
export class ListarmotoristaComponent implements OnInit {

  motorista: Motorista[] = [];
  constructor( private service: ListarmotoristaService) { }

  ngOnInit(): void {
    this.service.listarmotorista().subscribe(
      dados => this.motorista=dados,
      error=> alert("Erro ao gravar dados!")
    )
     
  }

}
