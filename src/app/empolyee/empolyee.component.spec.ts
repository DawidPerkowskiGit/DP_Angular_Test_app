import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeeComponent } from './empolyee.component';

describe('EmpolyeeComponent', () => {
  let component: EmpolyeeComponent;
  let fixture: ComponentFixture<EmpolyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpolyeeComponent]
    });
    fixture = TestBed.createComponent(EmpolyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
