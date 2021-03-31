import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstatsComponent } from './showstats.component';

describe('ShowstatsComponent', () => {
  let component: ShowstatsComponent;
  let fixture: ComponentFixture<ShowstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
