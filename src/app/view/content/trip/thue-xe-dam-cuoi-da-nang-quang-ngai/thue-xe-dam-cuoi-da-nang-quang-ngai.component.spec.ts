import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThueXeDamCuoiDaNangQuangNgaiComponent } from './thue-xe-dam-cuoi-da-nang-quang-ngai.component';

describe('ThueXeDamCuoiDaNangQuangNgaiComponent', () => {
  let component: ThueXeDamCuoiDaNangQuangNgaiComponent;
  let fixture: ComponentFixture<ThueXeDamCuoiDaNangQuangNgaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThueXeDamCuoiDaNangQuangNgaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThueXeDamCuoiDaNangQuangNgaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
