import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRequestRegisterComponent } from './change-request-register.component';

describe('ChangeRequestRegisterComponent', () => {
  let component: ChangeRequestRegisterComponent;
  let fixture: ComponentFixture<ChangeRequestRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRequestRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRequestRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
