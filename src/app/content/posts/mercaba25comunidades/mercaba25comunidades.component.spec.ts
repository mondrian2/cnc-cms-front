import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mercaba25comunidadesComponent } from './mercaba25comunidades.component';

describe('Mercaba25comunidadesComponent', () => {
  let component: Mercaba25comunidadesComponent;
  let fixture: ComponentFixture<Mercaba25comunidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mercaba25comunidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mercaba25comunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
