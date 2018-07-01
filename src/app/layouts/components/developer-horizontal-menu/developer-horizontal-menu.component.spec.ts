import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperHorizontalMenuComponent } from './developer-horizontal-menu.component';

describe('DeveloperHorizontalMenuComponent', () => {
  let component: DeveloperHorizontalMenuComponent;
  let fixture: ComponentFixture<DeveloperHorizontalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperHorizontalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperHorizontalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
