import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEspecialistaComponent } from './m-especialista.component';

describe('MEspecialistaComponent', () => {
  let component: MEspecialistaComponent;
  let fixture: ComponentFixture<MEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEspecialistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
