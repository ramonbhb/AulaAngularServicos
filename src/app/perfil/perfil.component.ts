import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../git-hub-service.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil
  constructor(private gitHubService: GitHubServiceService) { }

  async ngOnInit() {
    this.perfil = await this.gitHubService.getPerfil('ramonbhb');
    console.log(this.perfil);
  }

}
