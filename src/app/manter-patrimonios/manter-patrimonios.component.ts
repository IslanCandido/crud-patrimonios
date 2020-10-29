import { Component, OnInit } from '@angular/core';
import { PatrimonioServiceService } from '../manter-patrimonios/patrimonio-service.service';

@Component({
  selector: 'app-manter-patrimonios',
  templateUrl: './manter-patrimonios.component.html',
  styleUrls: ['./manter-patrimonios.component.css']
})
export class ManterPatrimoniosComponent implements OnInit {

  patrimonio: { id, descricao, tamanho, logradouro, rua, lote, quadra } = { id: null, descricao: "", tamanho: null, logradouro: "", rua: "", lote: null, quadra: null };
  patrimonios;


  constructor(private patrimonioService: PatrimonioServiceService) { }

  ngOnInit(): void {
    this.patrimonioService.get().subscribe(resultado => { this.patrimonios = resultado });
  }

  salvar() {
    this.patrimonioService.post(this.patrimonio).subscribe(resultado => {
      this.limpar();
      alert('Patrimonio salvo com sucesso!');
    });
  }

  deletar(id) {
    this.patrimonioService.delete(id).subscribe(resultado => {
      this.limpar();
      alert('Patrimonio removido com sucesso!');
    });
  }

  retornar(id) {
    this.patrimonioService.getById(id).subscribe(dados => {
      this.patrimonio = {
        id: dados.id,
        descricao: dados.descricao,
        tamanho: dados.tamanho,
        logradouro: dados.logradouro,
        rua: dados.rua,
        lote: dados.lote,
        quadra: dados.quadra
      };
    });
  }

  limpar() {
    this.patrimonio = {
      id: "", descricao: "", tamanho: "", logradouro: "", rua: "", lote: "", quadra: ""
    };
    this.patrimonioService.get().subscribe(resultado => { this.patrimonios = resultado });
  }

}
