import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponenet } from './add-user.component';

describe('AddUserComponenet', () => {
  let component: AddUserComponenet;
  let fixture: ComponentFixture<AddUserComponenet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserComponenet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
