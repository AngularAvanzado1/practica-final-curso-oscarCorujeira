import { PaisComponent, WebcompModule } from '@pf/shared/webcomp';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import 'zone.js';

@NgModule({
  imports: [BrowserModule, WebcompModule],
  entryComponents: [PaisComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(PaisComponent, {
      injector: this.injector
    });
    customElements.define('wbde-country', el);
  }
}
