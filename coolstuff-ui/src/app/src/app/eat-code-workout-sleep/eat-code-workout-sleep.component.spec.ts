import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatCodeWorkoutSleepComponent } from './eat-code-workout-sleep.component';

describe('EatCodeWorkoutSleepComponent', () => {
  let component: EatCodeWorkoutSleepComponent;
  let fixture: ComponentFixture<EatCodeWorkoutSleepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EatCodeWorkoutSleepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EatCodeWorkoutSleepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
