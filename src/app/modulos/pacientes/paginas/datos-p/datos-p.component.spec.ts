import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPComponent } from './datos-p.component';

describe('DatosPComponent', () => {
  let component: DatosPComponent;
  let fixture: ComponentFixture<DatosPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
