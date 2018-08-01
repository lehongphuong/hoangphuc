import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TamKySaKyComponent } from './tam-ky-sa-ky.component';

describe('TamKySaKyComponent', () => {
  let component: TamKySaKyComponent;
  let fixture: ComponentFixture<TamKySaKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamKySaKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TamKySaKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
