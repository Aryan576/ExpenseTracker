import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryexpenseComponent } from './categoryexpense.component';

describe('CategoryexpenseComponent', () => {
  let component: CategoryexpenseComponent;
  let fixture: ComponentFixture<CategoryexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
