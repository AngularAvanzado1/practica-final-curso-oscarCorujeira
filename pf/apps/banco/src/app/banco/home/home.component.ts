import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { BancoService } from '@pf/shared/servicios';

@Component({
  selector: 'pf-banco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  public regiones$: Observable<any>;

  constructor(
    private bancoService: BancoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.regiones$ = this.bancoService.getRegionContinental('')
      .pipe(
        // Una forma de filtrar solo los que tengan un id:
        map(val => val[1].filter(i => i.id !== '')),
        //Otra forma que no funciona, porque el filter se aplica al observable y no al array!!:
        // map(val => val[1]),
        // filter((val, i) => { console.log(val[i]); return val[i].id !== ''; })
      );
  }

  goContinente(code: string) {
    this.router.navigate(['/region', code]);
  }

  goFiltrar(value: string) {
    this.regiones$ = this.bancoService.getRegionContinental(value)
      .pipe(
        map(val => val[1])
      );
  }

}
