import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSoutenanceComponent } from './list-soutenance.component';

describe('ListSoutenanceComponent', () => {
  let component: ListSoutenanceComponent;
  let fixture: ComponentFixture<ListSoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSoutenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
