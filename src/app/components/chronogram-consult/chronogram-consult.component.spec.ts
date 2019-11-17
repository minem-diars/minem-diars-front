import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronogramConsultComponent } from './chronogram-consult.component';

describe('ChronogramConsultComponent', () => {
  let component: ChronogramConsultComponent;
  let fixture: ComponentFixture<ChronogramConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronogramConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronogramConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
