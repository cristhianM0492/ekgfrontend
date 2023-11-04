import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenEkgComponent } from './examen-ekg.component';

describe('ExamenEkgComponent', () => {
  let component: ExamenEkgComponent;
  let fixture: ComponentFixture<ExamenEkgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenEkgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenEkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
