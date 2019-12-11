import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pf-banco-home-ui',
  templateUrl: './home-ui.component.html',
  styleUrls: ['./home-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeUiComponent implements OnInit {

  @Input() regiones: any[] = [];
  @Output() irRegion = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  goRegion(code: string) {
    this.irRegion.emit(code);
  }

}
