import { ComponentFixture, TestBed } from '@angular/core/testing';

import { calciatoriComponent } from './calciatori.component';

describe('CalciatoriComponent', () => {
  let component: calciatoriComponent;
  let fixture: ComponentFixture<calciatoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [calciatoriComponent]
    });
    fixture = TestBed.createComponent(calciatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
