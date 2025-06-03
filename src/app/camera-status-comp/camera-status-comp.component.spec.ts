import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraStatusCompComponent } from './camera-status-comp.component';

describe('CameraStatusCompComponent', () => {
  let component: CameraStatusCompComponent;
  let fixture: ComponentFixture<CameraStatusCompComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraStatusCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraStatusCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
