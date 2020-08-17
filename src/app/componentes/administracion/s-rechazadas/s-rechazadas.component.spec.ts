import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRechazadasComponent } from './s-rechazadas.component';

describe('SRechazadasComponent', () => {
  let component: SRechazadasComponent;
  let fixture: ComponentFixture<SRechazadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRechazadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRechazadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
