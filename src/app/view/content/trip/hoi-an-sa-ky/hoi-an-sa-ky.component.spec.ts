import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoiAnSaKyComponent } from './hoi-an-sa-ky.component';

describe('HoiAnSaKyComponent', () => {
  let component: HoiAnSaKyComponent;
  let fixture: ComponentFixture<HoiAnSaKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoiAnSaKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoiAnSaKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
