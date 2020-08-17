import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaFavoritaComponent } from './receta-favorita.component';

describe('RecetaFavoritaComponent', () => {
  let component: RecetaFavoritaComponent;
  let fixture: ComponentFixture<RecetaFavoritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaFavoritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaFavoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
