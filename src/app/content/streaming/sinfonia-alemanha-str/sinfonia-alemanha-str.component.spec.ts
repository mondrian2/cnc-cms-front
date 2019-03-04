import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfoniaAlemanhaStrComponent } from './sinfonia-alemanha-str.component';

describe('SinfoniaAlemanhaStrComponent', () => {
  let component: SinfoniaAlemanhaStrComponent;
  let fixture: ComponentFixture<SinfoniaAlemanhaStrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinfoniaAlemanhaStrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinfoniaAlemanhaStrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
