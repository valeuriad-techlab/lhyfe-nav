import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhyfeNavComponent } from './lhyfe-nav.component';

describe('LhyfeNavComponent', () => {
  let component: LhyfeNavComponent;
  let fixture: ComponentFixture<LhyfeNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhyfeNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhyfeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
