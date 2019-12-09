import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramAcceptedConsultComponent } from './program-accepted-consult.component';

describe('ProgramAcceptedConsultComponent', () => {
  let component: ProgramAcceptedConsultComponent;
  let fixture: ComponentFixture<ProgramAcceptedConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramAcceptedConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramAcceptedConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
