import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDetailComponent } from './subject-detail.component';

describe('SubjectPageInfoComponent', () => {
  let component: SubjectDetailComponent;
  let fixture: ComponentFixture<SubjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
