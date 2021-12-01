import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipechartdataComponent } from './pipechartdata.component';

describe('PipechartdataComponent', () => {
  let component: PipechartdataComponent;
  let fixture: ComponentFixture<PipechartdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipechartdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipechartdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
