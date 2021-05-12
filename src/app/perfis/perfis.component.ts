import { Component, OnInit } from '@angular/core';
import { GitHubServiceService } from '../git-hub-service.service';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css']
})
export class PerfisComponent implements OnInit {
  perfis;
  
  constructor(private gitHubService: GitHubServiceService) { }

  ngOnInit(): void {
    this.perfis = this.gitHubService.getPerfis();
  }

}
