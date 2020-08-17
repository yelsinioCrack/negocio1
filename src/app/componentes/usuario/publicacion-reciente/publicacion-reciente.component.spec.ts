import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionRecienteComponent } from './publicacion-reciente.component';

describe('PublicacionRecienteComponent', () => {
  let component: PublicacionRecienteComponent;
  let fixture: ComponentFixture<PublicacionRecienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionRecienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionRecienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
