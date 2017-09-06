import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFullscreenComponent } from './google-fullscreen.component';

describe('GoogleFullscreenComponent', () => {
  let component: GoogleFullscreenComponent;
  let fixture: ComponentFixture<GoogleFullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFullscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
