import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCard1Component } from './home-card1.component';

describe('HomeCard1Component', () => {
  let component: HomeCard1Component;
  let fixture: ComponentFixture<HomeCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
