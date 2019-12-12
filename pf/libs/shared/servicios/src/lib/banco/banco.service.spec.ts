import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { BancoService } from './banco.service';

describe('BancoService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientTestingModule]}));

  it('should be created', () => {
    const service: BancoService = TestBed.get(BancoService);
    expect(service).toBeTruthy();
  });

  it(`THEN: should return an observable when call 'getRegionContinental()'`, () => {
    const service: BancoService = TestBed.get(BancoService);
    const regionContinental$: Observable<any> = service.getRegionContinental('');
    expect(regionContinental$).toBeInstanceOf(Observable);
  });

  it(`THEN: should return 'Welcome to api!' when call 'getRegionContinental()'`, async(() => {
    const service: BancoService = TestBed.get(BancoService);
    service
      .getRegionContinental('1')
      .subscribe(result =>
        expect(result).toEqual([{"page":"1","pages":"1","per_page":"50","total":"1"},[{"id":"1","code":"EAS","iso2code":"Z4","name":"East Asia & Pacific"}]])
      );
    const httpMock = TestBed.get(HttpTestingController);
    const req = httpMock.expectOne('http://api.worldbank.org/v2/region/1?format=json');
    req.flush([{"page":"1","pages":"1","per_page":"50","total":"1"},[{"id":"1","code":"EAS","iso2code":"Z4","name":"East Asia & Pacific"}]]);
    httpMock.verify();
  }));

});
