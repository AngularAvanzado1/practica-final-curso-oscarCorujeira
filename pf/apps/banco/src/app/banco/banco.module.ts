import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BancoRoutingModule } from './banco-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeUiComponent } from './home-ui/home-ui.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeUiComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BancoRoutingModule
  ]
})
export class BancoModule { }
