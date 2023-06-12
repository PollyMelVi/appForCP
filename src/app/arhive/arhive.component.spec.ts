import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhiveComponent } from './arhive.component';

describe('ArhiveComponent', () => {
  let component: ArhiveComponent;
  let fixture: ComponentFixture<ArhiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArhiveComponent]
    });
    fixture = TestBed.createComponent(ArhiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
