import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangNgaiSaKyComponent } from './quang-ngai-sa-ky.component';

describe('QuangNgaiSaKyComponent', () => {
  let component: QuangNgaiSaKyComponent;
  let fixture: ComponentFixture<QuangNgaiSaKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuangNgaiSaKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangNgaiSaKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
