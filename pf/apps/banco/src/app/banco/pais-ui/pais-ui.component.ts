import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pf-banco-pais-ui',
  templateUrl: './pais-ui.component.html',
  styleUrls: ['./pais-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisUiComponent implements OnInit {

  @Input() pais: any[] = [];
  @Output() irContinente = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  goContinente(code: string) {
    this.irContinente.emit(code);
  }

}
