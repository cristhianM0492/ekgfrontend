import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaPrincipalComponent } from './especialista-principal.component';

describe('EspecialistaPrincipalComponent', () => {
  let component: EspecialistaPrincipalComponent;
  let fixture: ComponentFixture<EspecialistaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialistaPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialistaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
