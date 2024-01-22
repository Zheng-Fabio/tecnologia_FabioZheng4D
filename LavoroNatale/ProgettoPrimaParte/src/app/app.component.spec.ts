import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { appComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [appComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProgettoPirmaParte'`, () => {
    const fixture = TestBed.createComponent(appComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProgettoPirmaParte');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(appComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProgettoPirmaParte app is running!');
  });
});
