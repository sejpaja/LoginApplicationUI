import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCompComponent } from './signup-comp.component';

describe('SignupCompComponent', () => {
  let component: SignupCompComponent;
  let fixture: ComponentFixture<SignupCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
