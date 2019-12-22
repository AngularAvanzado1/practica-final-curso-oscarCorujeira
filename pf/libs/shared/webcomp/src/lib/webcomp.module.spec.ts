import { async, TestBed } from '@angular/core/testing';
import { WebcompModule } from './webcomp.module';

describe('WebcompModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebcompModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebcompModule).toBeDefined();
  });
});
