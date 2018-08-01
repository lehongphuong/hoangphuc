import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuangNgaiHueComponent } from './quang-ngai-hue.component';

describe('QuangNgaiHueComponent', () => {
  let component: QuangNgaiHueComponent;
  let fixture: ComponentFixture<QuangNgaiHueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuangNgaiHueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuangNgaiHueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
