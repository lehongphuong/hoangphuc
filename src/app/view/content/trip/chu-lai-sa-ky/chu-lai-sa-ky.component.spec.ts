import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuLaiSaKyComponent } from './chu-lai-sa-ky.component';

describe('ChuLaiSaKyComponent', () => {
  let component: ChuLaiSaKyComponent;
  let fixture: ComponentFixture<ChuLaiSaKyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuLaiSaKyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuLaiSaKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
