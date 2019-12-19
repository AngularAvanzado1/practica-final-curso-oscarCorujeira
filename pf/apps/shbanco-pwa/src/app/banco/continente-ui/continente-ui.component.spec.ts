import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinenteUiComponent } from './continente-ui.component';

describe('ContinenteUiComponent', () => {
  let component: ContinenteUiComponent
  let fixture: ComponentFixture<ContinenteUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinenteUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinenteUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
