import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productoss } from './productoss';

describe('Productoss', () => {
  let component: Productoss;
  let fixture: ComponentFixture<Productoss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productoss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productoss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
