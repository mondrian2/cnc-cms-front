import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Celebracao50anosComponent } from './celebracao50anos.component';

describe('Celebracao50anosComponent', () => {
  let component: Celebracao50anosComponent;
  let fixture: ComponentFixture<Celebracao50anosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Celebracao50anosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Celebracao50anosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
