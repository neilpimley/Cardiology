import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpInformationComponent } from './gp-information.component';

describe('GpInformationComponent', () => {
  let component: GpInformationComponent;
  let fixture: ComponentFixture<GpInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
