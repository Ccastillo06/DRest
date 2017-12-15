import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLobbyComponent } from './data-lobby.component';

describe('DataLobbyComponent', () => {
  let component: DataLobbyComponent;
  let fixture: ComponentFixture<DataLobbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataLobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
