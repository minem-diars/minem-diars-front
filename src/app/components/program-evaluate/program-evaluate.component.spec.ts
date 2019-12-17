import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramEvaluateComponent } from './program-evaluate.component';

describe('ProgramEvaluateComponent', () => {
  let component: ProgramEvaluateComponent;
  let fixture: ComponentFixture<ProgramEvaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramEvaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEvaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
