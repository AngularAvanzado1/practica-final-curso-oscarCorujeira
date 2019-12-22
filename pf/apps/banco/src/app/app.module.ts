import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BancoModule } from './banco/banco.module';
import { ErrorComponent } from './shared/error/error.component';
// import { WebcompModule } from '@pf/shared/webcomp';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BancoModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabled' })
    // WebcompModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
