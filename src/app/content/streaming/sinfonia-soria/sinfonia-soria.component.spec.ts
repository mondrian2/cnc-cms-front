import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfoniaSoriaComponent } from './sinfonia-soria.component';

describe('SinfoniaSoriaComponent', () => {
  let component: SinfoniaSoriaComponent;
  let fixture: ComponentFixture<SinfoniaSoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinfoniaSoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinfoniaSoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
