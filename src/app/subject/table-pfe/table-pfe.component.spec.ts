import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePfeComponent } from './table-pfe.component';

describe('TablePfeComponent', () => {
  let component: TablePfeComponent;
  let fixture: ComponentFixture<TablePfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
