import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../environment/environments';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //variaveis
  mensagemErro: string ='';

  //metodo construtor
  constructor(
    private httpClient: HttpClient
  ) {}

  //criando o formulario
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  //verifica se os campos tem erros de validacao
  get f() {
    return this.form.controls;
  }

  //capturar o submit do formulario
  submit(): void {
    //console.log(this.form.value);

    //executando o servico de autenticacao de usuarios na api
    this.httpClient
      .post("http://localhost:8081/api/usuario/autenticar", this.form.value)
      .subscribe({
        next: (data: any) => {
          //console.log(data);

          //ravar dados na local storage do navegador
          localStorage.setItem('auth-user', JSON.stringify(data));

          //redirecionar para a pagina de consulta de produtos
          location.href = '/app/produto-consulta';
        },
        error: (e) => { //peando msg de erro
          //console.log();
          this.mensagemErro = e.error.errors[0];
        }
      })
  }
}

