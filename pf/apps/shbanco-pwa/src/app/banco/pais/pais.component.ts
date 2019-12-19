import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { BancoService } from '@pf/shared/servicios';

@Component({
  selector: 'pf-banco-pwa-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {

  public pais$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private bancoService: BancoService,
    private router: Router,
  ) { }

  ngOnInit() {
    const idPais = this.route.snapshot.paramMap.get('id');
    this.pais$ = this.bancoService.getPais(idPais)
    .pipe(
      map(val => val[1][0]),
    );
  }

  goBackContinente(code: string) {
    this.router.navigate(['/region', code]);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
