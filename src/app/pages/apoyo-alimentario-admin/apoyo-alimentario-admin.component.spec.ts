import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoAlimentarioAdminComponent } from './apoyo-alimentario-admin.component';

describe('ApoyoAlimentarioAdminComponent', () => {
  let component: ApoyoAlimentarioAdminComponent;
  let fixture: ComponentFixture<ApoyoAlimentarioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyoAlimentarioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoAlimentarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
