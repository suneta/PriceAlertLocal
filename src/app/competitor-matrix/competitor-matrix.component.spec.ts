import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorMatrixComponent } from './competitor-matrix.component';

describe('CompetitorMatrixComponent', () => {
  let component: CompetitorMatrixComponent;
  let fixture: ComponentFixture<CompetitorMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
