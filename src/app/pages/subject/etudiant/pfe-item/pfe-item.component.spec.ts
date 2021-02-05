import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfeItemComponent } from './pfe-item.component';

describe('PfeItemComponent', () => {
  let component: PfeItemComponent;
  let fixture: ComponentFixture<PfeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
