import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsouselComponent } from './carsousel.component';

describe('CarsouselComponent', () => {
  let component: CarsouselComponent;
  let fixture: ComponentFixture<CarsouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
