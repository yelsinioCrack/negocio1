import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnListaComponent } from './btn-lista.component';

describe('BtnListaComponent', () => {
  let component: BtnListaComponent;
  let fixture: ComponentFixture<BtnListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
