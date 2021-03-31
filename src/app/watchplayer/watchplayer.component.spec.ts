import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchplayerComponent } from './watchplayer.component';

describe('WatchplayerComponent', () => {
  let component: WatchplayerComponent;
  let fixture: ComponentFixture<WatchplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
