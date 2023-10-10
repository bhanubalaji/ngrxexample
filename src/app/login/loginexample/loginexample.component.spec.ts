import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginexampleComponent } from './loginexample.component';

describe('LoginexampleComponent', () => {
  let component: LoginexampleComponent;
  let fixture: ComponentFixture<LoginexampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginexampleComponent]
    });
    fixture = TestBed.createComponent(LoginexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
