import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentvisitorComponent } from './percentvisitor.component';

describe('PercentvisitorComponent', () => {
  let component: PercentvisitorComponent;
  let fixture: ComponentFixture<PercentvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentvisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
