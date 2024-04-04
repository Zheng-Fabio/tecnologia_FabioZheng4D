import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenteMailComponent } from './sent-email.component';

describe('SentMailComponent', () => {
  let component: SenteMailComponent;
  let fixture: ComponentFixture<SenteMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenteMailComponent]
    });
    fixture = TestBed.createComponent(SenteMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});