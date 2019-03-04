import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Papa50anosComponent } from './papa50anos.component';

describe('Papa50anosComponent', () => {
  let component: Papa50anosComponent;
  let fixture: ComponentFixture<Papa50anosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Papa50anosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Papa50anosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
