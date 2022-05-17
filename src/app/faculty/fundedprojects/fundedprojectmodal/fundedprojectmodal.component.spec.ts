import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundedprojectmodalComponent } from './fundedprojectmodal.component';

describe('FundedprojectmodalComponent', () => {
  let component: FundedprojectmodalComponent;
  let fixture: ComponentFixture<FundedprojectmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundedprojectmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundedprojectmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
