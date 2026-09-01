import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosDetalle } from './combos-detalle';

describe('CombosDetalle', () => {
  let component: CombosDetalle;
  let fixture: ComponentFixture<CombosDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombosDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombosDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
