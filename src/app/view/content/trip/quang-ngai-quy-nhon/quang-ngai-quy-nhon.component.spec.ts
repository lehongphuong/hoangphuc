import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangNgaiQuyNhonComponent } from './quang-ngai-quy-nhon.component';

describe('QuangNgaiQuyNhonComponent', () => {
  let component: QuangNgaiQuyNhonComponent;
  let fixture: ComponentFixture<QuangNgaiQuyNhonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuangNgaiQuyNhonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangNgaiQuyNhonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
