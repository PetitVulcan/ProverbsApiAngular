import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbDailyComponent } from './proverb-daily.component';

describe('ProverbDailyComponent', () => {
  let component: ProverbDailyComponent;
  let fixture: ComponentFixture<ProverbDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
