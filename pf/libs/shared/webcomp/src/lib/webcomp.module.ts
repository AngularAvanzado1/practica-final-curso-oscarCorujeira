import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisComponent } from './pais/pais.component';
import { PaisUiComponent } from './pais-ui/pais-ui.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaisComponent, PaisUiComponent],
  exports: [PaisComponent]
})
export class WebcompModule {}
