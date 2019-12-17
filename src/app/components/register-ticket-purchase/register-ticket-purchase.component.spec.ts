import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTicketPurchaseComponent } from './register-ticket-purchase.component';

describe('RegisterTicketPurchaseComponent', () => {
  let component: RegisterTicketPurchaseComponent;
  let fixture: ComponentFixture<RegisterTicketPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTicketPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTicketPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
