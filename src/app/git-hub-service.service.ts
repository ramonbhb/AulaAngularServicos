import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubServiceService {

  getPerfis() {
    let perfis = [
      {
        id: 1,
        nome: "Tais Santos",
        usuario: "tsantos",
        qtdSeguidores: 20,
      },
      {
        id: 2,
        nome: "Lara Graziela",
        usuario: "lgraziela",
        qtdSeguidores: 25,
  
      },
      {
        id: 3,
        nome: "Anna Thereza",
        usuario: "athereza",
        qtdSeguidores: 10,
      },
      {
        id: 4,
        nome: "Cláudio Junior",
        usuario: "cjunior",
        qtdSeguidores: 13,
      }]
    return perfis
  }

  async getPerfil(user: string) {
    let resposta = await this.http.get('https://api.github.com/users/' + user).toPromise();
    return resposta;
  }

  constructor(private http: HttpClient) { }
}
