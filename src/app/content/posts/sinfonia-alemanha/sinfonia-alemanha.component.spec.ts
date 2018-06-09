import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfoniaAlemanhaComponent } from './sinfonia-alemanha.component';

describe('SinfoniaAlemanhaComponent', () => {
  let component: SinfoniaAlemanhaComponent;
  let fixture: ComponentFixture<SinfoniaAlemanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinfoniaAlemanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinfoniaAlemanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
