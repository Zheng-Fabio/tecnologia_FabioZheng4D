import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadreComponent } from './squadre.component';

describe('SquadreComponent', () => {
  let component: SquadreComponent;
  let fixture: ComponentFixture<SquadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquadreComponent]
    });
    fixture = TestBed.createComponent(SquadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
