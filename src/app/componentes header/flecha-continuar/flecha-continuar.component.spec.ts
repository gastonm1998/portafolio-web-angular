import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlechaContinuarComponent } from './flecha-continuar.component';

describe('FlechaContinuarComponent', () => {
  let component: FlechaContinuarComponent;
  let fixture: ComponentFixture<FlechaContinuarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlechaContinuarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlechaContinuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
