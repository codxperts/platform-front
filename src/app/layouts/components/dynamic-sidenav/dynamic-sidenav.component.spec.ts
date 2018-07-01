import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSidenavComponent } from './dynamic-sidenav.component';

describe('DynamicSidenavComponent', () => {
  let component: DynamicSidenavComponent;
  let fixture: ComponentFixture<DynamicSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
