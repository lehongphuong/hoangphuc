import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaNangSaKyComponent } from './da-nang-sa-ky.component';

describe('DaNangSaKyComponent', () => {
  let component: DaNangSaKyComponent;
  let fixture: ComponentFixture<DaNangSaKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaNangSaKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaNangSaKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
