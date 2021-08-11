import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Motorista } from '../Entidades/Motorista';
import { IncluirmotoristaService } from '../incluirmotorista.service';

@Component({

  selector: 'app-incluirmotorista',
  templateUrl: './incluirmotorista.component.html',
  styleUrls: ['./incluirmotorista.component.css']
})
export class IncluirmotoristaComponent implements OnInit {

  motorista: Motorista= {codigo:0, nome:'', telefone:''};
  constructor(private servico: IncluirmotoristaService) { }

  ngOnInit(): void {
    
  }
  incluir(frm:NgForm){
    this.servico.incluirmotorista(this.motorista).subscribe(
      dados=> alert("Dados Gravados com Sucesso!!"),
      error=>alert("Erro ao Gravar dados")
    )}

}
