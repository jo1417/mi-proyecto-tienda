import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Barrapublicidad } from './barrapublicidad';

describe('Barrapublicidad', () => {
  let component: Barrapublicidad;
  let fixture: ComponentFixture<Barrapublicidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Barrapublicidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Barrapublicidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
