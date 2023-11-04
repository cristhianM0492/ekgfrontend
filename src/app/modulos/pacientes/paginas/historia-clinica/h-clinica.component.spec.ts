import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HClinicaComponent } from './h-clinica.component';

describe('HClinicaComponent', () => {
  let component: HClinicaComponent;
  let fixture: ComponentFixture<HClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
