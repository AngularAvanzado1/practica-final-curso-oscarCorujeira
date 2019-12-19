import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFilterUiComponent } from './home-filter-ui.component';

describe('HomeFilterUiComponent', () => {
  let component: HomeFilterUiComponent;
  let fixture: ComponentFixture<HomeFilterUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFilterUiComponent ]
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
