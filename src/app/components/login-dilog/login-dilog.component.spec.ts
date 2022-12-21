import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDilogComponent } from './login-dilog.component';

describe('LoginDilogComponent', () => {
  let component: LoginDilogComponent;
  let fixture: ComponentFixture<LoginDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDilogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
