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
});
