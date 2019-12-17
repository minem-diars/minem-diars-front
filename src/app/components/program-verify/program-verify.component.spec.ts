import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramVerifyComponent } from './program-verify.component';

describe('ProgramVerifyComponent', () => {
  let component: ProgramVerifyComponent;
  let fixture: ComponentFixture<ProgramVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
