import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BancoRoutingModule } from './banco-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeUiComponent } from './home-ui/home-ui.component';
import { ContinenteComponent } from './continente/continente.component';
import { ContinenteUiComponent } from './continente-ui/continente-ui.component';
import { PaisComponent } from './pais/pais.component';
import { PaisUiComponent } from './pais-ui/pais-ui.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeUiComponent,
    ContinenteComponent,
    ContinenteUiComponent,
    PaisComponent,
    PaisUiComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BancoRoutingModule
  ]
})
export class BancoModule { }
