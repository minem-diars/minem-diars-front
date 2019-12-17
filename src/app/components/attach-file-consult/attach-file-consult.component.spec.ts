import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachFileConsultComponent } from './attach-file-consult.component';

describe('AttachFileConsultComponent', () => {
  let component: AttachFileConsultComponent;
  let fixture: ComponentFixture<AttachFileConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachFileConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachFileConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
