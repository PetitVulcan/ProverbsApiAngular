import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbsAddComponent } from './proverbs-add.component';

describe('ProverbsAddComponent', () => {
  let component: ProverbsAddComponent;
  let fixture: ComponentFixture<ProverbsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
