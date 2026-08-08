import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarrucel } from './admin-carrucel';

describe('AdminCarrucel', () => {
  let component: AdminCarrucel;
  let fixture: ComponentFixture<AdminCarrucel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarrucel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarrucel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
