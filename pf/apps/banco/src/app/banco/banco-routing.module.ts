import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContinenteComponent } from './continente/continente.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   // component: HomeComponent,
  // }
  // children: [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'region/:code',
    component: ContinenteComponent
  }
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoRoutingModule { }
