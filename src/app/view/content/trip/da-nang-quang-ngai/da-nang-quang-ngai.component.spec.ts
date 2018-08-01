import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaNangQuangNgaiComponent } from './da-nang-quang-ngai.component';

describe('DaNangQuangNgaiComponent', () => {
  let component: DaNangQuangNgaiComponent;
  let fixture: ComponentFixture<DaNangQuangNgaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaNangQuangNgaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaNangQuangNgaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
