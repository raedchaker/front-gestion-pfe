import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePfeEnseignantComponent } from './liste-pfe-enseignant.component';

describe('ListePfeEnseignantComponent', () => {
  let component: ListePfeEnseignantComponent;
  let fixture: ComponentFixture<ListePfeEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePfeEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePfeEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
