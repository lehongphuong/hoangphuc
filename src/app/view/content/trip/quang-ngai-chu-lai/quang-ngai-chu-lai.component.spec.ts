import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangNgaiChuLaiComponent } from './quang-ngai-chu-lai.component';

describe('QuangNgaiChuLaiComponent', () => {
  let component: QuangNgaiChuLaiComponent;
  let fixture: ComponentFixture<QuangNgaiChuLaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuangNgaiChuLaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangNgaiChuLaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
