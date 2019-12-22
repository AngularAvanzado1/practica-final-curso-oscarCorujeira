import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { HomeFilterUiComponent } from './home-filter-ui.component';

describe('HomeFilterUiComponent', () => {
  let component: HomeFilterUiComponent;
  let fixture: ComponentFixture<HomeFilterUiComponent>;
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ HomeFilterUiComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFilterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
