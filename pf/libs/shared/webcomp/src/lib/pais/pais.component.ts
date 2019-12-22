import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BancoService } from '@pf/shared/servicios';

@Component({
  selector: 'webcomp-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {

  public pais$: Observable<any>;
  @Input() id: string;

  constructor(
    private bancoService: BancoService,
  ) { }

  ngOnInit() {
    const idPais = this.id;
    this.pais$ = this.bancoService.getPais(idPais)
    .pipe(
      map(val => val[1][0]),
    );
  }

}
