import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperLayoutComponent } from './developer-layout.component';

describe('DeveloperLayoutComponent', () => {
  let component: DeveloperLayoutComponent;
  let fixture: ComponentFixture<DeveloperLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
