import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drop2Component } from './drop2.component';

describe('Drop2Component', () => {
  let component: Drop2Component;
  let fixture: ComponentFixture<Drop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Drop2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
