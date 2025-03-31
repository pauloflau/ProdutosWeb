import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  usuarioAutenticado: boolean = false;
  nomeUsuario: string = '';
  emailUsuario: string = '';

  ngOnInit(): void {
      const dados = localStorage.getItem('auth-user');
      if(dados!= null){
        var usuario = JSON.parse(dados);
        this.nomeUsuario = usuario.nome;
        this.emailUsuario = usuario.email;

        this.usuarioAutenticado = true;
      }
  }

  //funcao logout
  logout(): void{
    if(confirm('Deseja sair do sistema?')){
      //apaga os dadaos local storage
      localStorage.removeItem('auth-user');

      //redireciona p login
      location.href = '/app/login';
    }
  }
}
