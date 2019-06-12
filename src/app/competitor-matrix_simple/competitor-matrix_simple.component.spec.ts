import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorMatrixSimpleComponent } from './competitor-matrix_simple.component';

describe('CompetitorMatrixSimpleComponent', () => {
  let component: CompetitorMatrixSimpleComponent;
  let fixture: ComponentFixture<CompetitorMatrixSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorMatrixSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorMatrixSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
