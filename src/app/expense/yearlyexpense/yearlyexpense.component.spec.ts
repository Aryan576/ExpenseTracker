import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyexpenseComponent } from './yearlyexpense.component';

describe('YearlyexpenseComponent', () => {
  let component: YearlyexpenseComponent;
  let fixture: ComponentFixture<YearlyexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
