import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesComponent } from './colleagues.component';

describe('ColleaguesComponent', () => {
  let component: ColleaguesComponent;
  let fixture: ComponentFixture<ColleaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
