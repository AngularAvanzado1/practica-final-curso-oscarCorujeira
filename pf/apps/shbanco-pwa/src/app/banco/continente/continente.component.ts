import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

//import { BancoService } from '../banco.service';
import { BancoService } from '@pf/shared/servicios';

@Component({
  selector: 'pf-banco-pwa-continente',
  templateUrl: './continente.component.html',
  styleUrls: ['./continente.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContinenteComponent implements OnInit {

  public paises$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private bancoService: BancoService,
    private router: Router,
  ) { }

  ngOnInit() {
    const continente = this.route.snapshot.paramMap.get('code');
    this.paises$ = this.bancoService.getContinente(continente)
    .pipe(
      map(val => val[1]),
    );
  }

  goPais(id: string) {
    this.router.navigate(['/country', id]);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
