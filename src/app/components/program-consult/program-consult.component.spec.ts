import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramConsultComponent } from './program-consult.component';

describe('ProgramConsultComponent', () => {
  let component: ProgramConsultComponent;
  let fixture: ComponentFixture<ProgramConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
