import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronogramRegisterComponent } from './chronogram-register.component';

describe('ChronogramRegisterComponent', () => {
  let component: ChronogramRegisterComponent;
  let fixture: ComponentFixture<ChronogramRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronogramRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronogramRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
