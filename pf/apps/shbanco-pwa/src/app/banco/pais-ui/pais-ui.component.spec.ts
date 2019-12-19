import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisUiComponent } from './pais-ui.component';

describe('PaisUiComponent', () => {
  let component: PaisUiComponent
  let fixture: ComponentFixture<PaisUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
