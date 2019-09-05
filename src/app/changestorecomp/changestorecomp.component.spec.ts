import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestorecompComponent } from './changestorecomp.component';

describe('ChangestorecompComponent', () => {
  let component: ChangestorecompComponent;
  let fixture: ComponentFixture<ChangestorecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangestorecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangestorecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
