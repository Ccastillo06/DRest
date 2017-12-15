import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTicketsComponent } from './total-tickets.component';

describe('TotalTicketsComponent', () => {
  let component: TotalTicketsComponent;
  let fixture: ComponentFixture<TotalTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
