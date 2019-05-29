import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalInfoPage } from './rental-info.page';

describe('RentalInfoPage', () => {
  let component: RentalInfoPage;
  let fixture: ComponentFixture<RentalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
