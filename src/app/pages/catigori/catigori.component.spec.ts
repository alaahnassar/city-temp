import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoriComponent } from './catigori.component';

describe('CatigoriComponent', () => {
  let component: CatigoriComponent;
  let fixture: ComponentFixture<CatigoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatigoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatigoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
