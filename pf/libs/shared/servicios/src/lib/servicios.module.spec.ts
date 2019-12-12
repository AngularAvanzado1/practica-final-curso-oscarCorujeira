import { async, TestBed } from '@angular/core/testing';
import { ServiciosModule } from './servicios.module';

describe('ServiciosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ServiciosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ServiciosModule).toBeDefined();
  });
});
