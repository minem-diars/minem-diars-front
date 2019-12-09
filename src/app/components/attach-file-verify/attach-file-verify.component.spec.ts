import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachFileVerifyComponent } from './attach-file-verify.component';

describe('AttachFileVerifyComponent', () => {
  let component: AttachFileVerifyComponent;
  let fixture: ComponentFixture<AttachFileVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachFileVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachFileVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
