import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HomeUiComponent } from '../home-ui/home-ui.component';
import { HomeFilterUiComponent } from '../home-filter-ui/home-filter-ui.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let componentFilter: HomeFilterUiComponent;
  let componentUi: HomeUiComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fixtureFilter: ComponentFixture<HomeFilterUiComponent>;
  let fixtureUi: ComponentFixture<HomeUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule ],
      declarations: [ HomeComponent, HomeUiComponent, HomeFilterUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixtureFilter = TestBed.createComponent(HomeFilterUiComponent);
    componentFilter = fixtureFilter.componentInstance;
    fixtureFilter.detectChanges();

    fixtureUi = TestBed.createComponent(HomeUiComponent);
    componentUi = fixtureUi.componentInstance;
    fixtureUi.detectChanges();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
