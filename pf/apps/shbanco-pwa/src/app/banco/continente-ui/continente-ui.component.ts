import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pf-banco-pwa-continente-ui',
  templateUrl: './continente-ui.component.html',
  styleUrls: ['./continente-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinenteUiComponent implements OnInit {

  @Input() paises: any[] = [];
  @Output() irPais = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  goPais(id: string) {
    this.irPais.emit(id);
  }

}
