import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GERENTE, SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string;
  senha: string;
  mensagem: string;

  constructor(private server: SystemService, private router: Router) {

  }

  login() {
    try {
      this.server.login(this.email, this.senha);
      if(this.server.logado.perfil === GERENTE){

        this.mensagem = this.server.logado.nome;
          //Carrega a tela do admin
        this.router.navigate(['/admin']);
      }else{
        this.router.navigate(['/candidato']);
      }
    } catch (error) {
      this.mensagem = error;
    }
  }
}
