import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosSuperiorComponent } from './iconos-superior.component';

describe('IconosSuperiorComponent', () => {
  let component: IconosSuperiorComponent;
  let fixture: ComponentFixture<IconosSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosSuperiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
