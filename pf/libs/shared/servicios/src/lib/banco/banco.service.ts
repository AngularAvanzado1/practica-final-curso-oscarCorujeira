import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(
    private http: HttpClient,
  ) { }

  getRegionContinental(codigoRegion: string): Observable<any> {
    return this.http.get(`http://api.worldbank.org/v2/region/${codigoRegion}?format=json`);
  }

  getContinente(codigoContinente: string): Observable<any> {
    return this.http.get(`http://api.worldbank.org/v2/region/${codigoContinente}/country?per_page=1000&format=json`);
  }

  getPais(codigoPais: string): Observable<any> {
    return this.http.get(`http://api.worldbank.org/V2/country/${codigoPais}?format=json`);
  }

}
