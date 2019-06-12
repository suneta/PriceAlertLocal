import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorLayoutComponent } from './competitor-layout.component';

describe('CompetitorLayoutComponent', () => {
  let component: CompetitorLayoutComponent;
  let fixture: ComponentFixture<CompetitorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
