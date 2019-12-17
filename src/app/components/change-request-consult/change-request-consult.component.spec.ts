import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRequestConsultComponent } from './change-request-consult.component';

describe('ChangeRequestConsultComponent', () => {
  let component: ChangeRequestConsultComponent;
  let fixture: ComponentFixture<ChangeRequestConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRequestConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRequestConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
