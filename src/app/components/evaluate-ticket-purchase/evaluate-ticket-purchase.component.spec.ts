import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateTicketPurchaseComponent } from './evaluate-ticket-purchase.component';

describe('EvaluateTicketPurchaseComponent', () => {
  let component: EvaluateTicketPurchaseComponent;
  let fixture: ComponentFixture<EvaluateTicketPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluateTicketPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateTicketPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
