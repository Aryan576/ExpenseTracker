import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyexpenseComponent } from './dailyexpense.component';

describe('DailyexpenseComponent', () => {
  let component: DailyexpenseComponent;
  let fixture: ComponentFixture<DailyexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
