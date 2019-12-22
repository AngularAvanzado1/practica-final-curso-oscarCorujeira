import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'webcomp-pais-ui',
  templateUrl: './pais-ui.component.html',
  styleUrls: ['./pais-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisUiComponent implements OnInit {

  @Input() pais: any[] = [];

  constructor() { }

  ngOnInit() { }

}
