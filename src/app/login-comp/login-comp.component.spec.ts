import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompComponent } from './login-comp.component';

describe('LoginCompComponent', () => {
  let component: LoginCompComponent;
  let fixture: ComponentFixture<LoginCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
