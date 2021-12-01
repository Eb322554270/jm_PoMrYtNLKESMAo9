import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesdComponent } from './succesd.component';

describe('SuccesdComponent', () => {
  let component: SuccesdComponent;
  let fixture: ComponentFixture<SuccesdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
