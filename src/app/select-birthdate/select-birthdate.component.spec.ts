import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBirthdateComponent } from './select-birthdate.component';

describe('SelectBirthdateComponent', () => {
  let component: SelectBirthdateComponent;
  let fixture: ComponentFixture<SelectBirthdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBirthdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBirthdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
