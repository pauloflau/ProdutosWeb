import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-consulta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-consulta.component.html',
  styleUrl: './produto-consulta.component.css'
})
export class ProdutoConsultaComponent {

  //variável para guardar a consulta de produtos
  produtos: any[] = []; //lista de objetos

  //construtor
  constructor(
    private httpClient: HttpClient
  ) { }
  //evento executado pelo angular sempre
  //que o componente é aberto / carregado
  ngOnInit(): void {
    //executando a consulta para a API (GET)
    this.httpClient.get('http://localhost:8080/api' + "/produtos")
      .subscribe({
        next: (data) => { //capturar a resposta de sucesso da API
          this.produtos = data as any[];          
        },
        error: (e) => { //capturar a resposta de erro da API
          console.log(e);
        }
      });
  }
}
