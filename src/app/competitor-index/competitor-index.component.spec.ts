import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorIndexComponent } from './competitor-index.component';

describe('CompetitorIndexComponent', () => {
  let component: CompetitorIndexComponent;
  let fixture: ComponentFixture<CompetitorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
