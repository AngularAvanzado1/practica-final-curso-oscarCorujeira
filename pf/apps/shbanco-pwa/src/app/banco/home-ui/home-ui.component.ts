import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pf-banco-pwa-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeUiComponent implements OnInit {

  @Input() regiones: any[] = [];
  @Output() irRegion = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  goRegion(code: string) {
    this.irRegion.emit(code);
  }

}
