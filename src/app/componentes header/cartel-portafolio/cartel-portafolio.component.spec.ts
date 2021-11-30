import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartelPortafolioComponent } from './cartel-portafolio.component';

describe('CartelPortafolioComponent', () => {
  let component: CartelPortafolioComponent;
  let fixture: ComponentFixture<CartelPortafolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartelPortafolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartelPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
