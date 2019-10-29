import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverbsListComponent } from './proverbs-list.component';

describe('ProverbsListComponent', () => {
  let component: ProverbsListComponent;
  let fixture: ComponentFixture<ProverbsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverbsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
