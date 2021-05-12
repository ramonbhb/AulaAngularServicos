import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfisComponent } from './perfis/perfis.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RepositorioComponent } from './repositorio/repositorio.component';


const routes: Routes = [
  { path: 'perfis', component: PerfisComponent },
  { path: 'repositorios', component: RepositorioComponent},
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
