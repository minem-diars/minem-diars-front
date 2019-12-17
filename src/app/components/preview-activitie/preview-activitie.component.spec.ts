import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewActivitieComponent } from './preview-activitie.component';

describe('PreviewActivitieComponent', () => {
  let component: PreviewActivitieComponent;
  let fixture: ComponentFixture<PreviewActivitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewActivitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewActivitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
