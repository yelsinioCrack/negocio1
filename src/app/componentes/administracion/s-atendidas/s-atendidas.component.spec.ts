import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAtendidasComponent } from './s-atendidas.component';

describe('SAtendidasComponent', () => {
  let component: SAtendidasComponent;
  let fixture: ComponentFixture<SAtendidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAtendidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAtendidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
