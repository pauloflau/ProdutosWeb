import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //erro senha
  erroSenha: string = '';

  //método construtor
  constructor(private httpClient: HttpClient) { }

  //programando a estrutura do formulário
  //resgatar cada campo preenchido no formulário
  form = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(4)]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    senha: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),

    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  });

  //função para verificar se os campos do formulário
  //possuem algum erro de validação
  get f() {
    return this.form.controls;
  }

  //função para capturar o submit do formulário
  submit() {
    this.erroSenha = '';

    //verificando se as senhas estão iguais
    if (this.form.value.senha == this.form.value.senhaConfirmacao) {

      //imprimindo os campos do formulário no console
      console.log(this.form.value);

      //fazendo a requisição POST para a API
      this.httpClient
        .post('http://localhost:8081/api/usuario/criar', this.form.value)
        .subscribe({
          next: (data) => { //capturar a resposta de sucesso
            console.log(data);
          },
          error: (e) => { //capturar a resposta de erro
            console.log(e);
          }
        });
    }
    else {
      this.erroSenha = 'Senhas não conferem, por favor verifique.';
    }
  }
}
