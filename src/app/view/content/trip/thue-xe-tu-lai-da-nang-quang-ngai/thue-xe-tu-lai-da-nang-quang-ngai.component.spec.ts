import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThueXeTuLaiDaNangQuangNgaiComponent } from './thue-xe-tu-lai-da-nang-quang-ngai.component';

describe('ThueXeTuLaiDaNangQuangNgaiComponent', () => {
  let component: ThueXeTuLaiDaNangQuangNgaiComponent;
  let fixture: ComponentFixture<ThueXeTuLaiDaNangQuangNgaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThueXeTuLaiDaNangQuangNgaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThueXeTuLaiDaNangQuangNgaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
