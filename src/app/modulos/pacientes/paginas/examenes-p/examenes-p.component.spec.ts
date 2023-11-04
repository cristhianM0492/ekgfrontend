import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExamenesPComponent} from './examenes-p.component';

describe('ExamenesPComponent', () => {
  let component: ExamenesPComponent;
  let fixture: ComponentFixture<ExamenesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenesPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
