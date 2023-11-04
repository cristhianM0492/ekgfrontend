import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPacientesComponent } from './d-pacientes.component';

describe('DPacientesComponent', () => {
  let component: DPacientesComponent;
  let fixture: ComponentFixture<DPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
