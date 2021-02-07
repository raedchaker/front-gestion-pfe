import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEncadrementsComponent } from './list-encadrements.component';

describe('ListEncadrementsComponent', () => {
  let component: ListEncadrementsComponent;
  let fixture: ComponentFixture<ListEncadrementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEncadrementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEncadrementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
