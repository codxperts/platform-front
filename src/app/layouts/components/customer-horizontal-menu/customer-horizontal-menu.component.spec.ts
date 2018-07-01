import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHorizontalMenuComponent } from './customer-horizontal-menu.component';

describe('CustomerHorizontalMenuComponent', () => {
  let component: CustomerHorizontalMenuComponent;
  let fixture: ComponentFixture<CustomerHorizontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHorizontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
