import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContinenteComponent } from './continente/continente.component';
import { PaisComponent } from './pais/pais.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'region/:code',
    component: ContinenteComponent
  },
  {
    path: 'country/:id',
    component: PaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
